########################################
# Module CloudFront - main
########################################
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = var.s3_bucket_bucket_regional_domain_name
    origin_id   = var.s3_bucket_bucket_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  enabled = true

  default_root_object = "index.html"

  # aliases = ["dev.quanttrade.io", "www.dev.quanttrade.io"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.s3_bucket_bucket_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE", "NL"]
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_identity" "main" {
  comment = local.cf_oai_comment
}

data "template_file" "cloud_front_s3_access_policy" {
  template = file("./templates/cloud_front/cloud-front-access-s3-policy.json")

  vars = {
    CLOUD_FRONT_ACCESS_IDENTITY = aws_cloudfront_origin_access_identity.main.id
    S3_BUCKET_ARN_ACCESS_PATH   = var.s3_bucket_arn_access_path
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloud_front" {
  bucket = var.s3_bucket_bucket_name
  policy = data.template_file.cloud_front_s3_access_policy.rendered
}
