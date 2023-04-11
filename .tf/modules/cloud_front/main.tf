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

  enabled = local.distribution_enabled

  default_root_object = local.distribution_default_root_object

  # aliases = ["dev.quanttrade.io", "www.dev.quanttrade.io"]

  default_cache_behavior {
    allowed_methods  = local.distribution_allowed_methods
    cached_methods   = local.distribution_allowed_methods
    target_origin_id = var.s3_bucket_bucket_name

    forwarded_values {
      query_string = local.forward_query_string

      cookies {
        forward = local.cookie_forward
      }
    }

    viewer_protocol_policy = local.viewer_protocol_policy
    min_ttl                = local.min_ttl
    default_ttl            = local.default_ttl
    max_ttl                = local.max_ttl
  }

  restrictions {
    geo_restriction {
      restriction_type = local.geo_restriction_type
      locations        = local.geo_restriction_locations
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = local.certificate_default
  }

  custom_error_response {
    error_caching_min_ttl = local.error_caching_min_ttl_403
    error_code            = local.error_code_403
    response_code         = local.response_code_403
    response_page_path    = local.distribution_default_root_object
  }
}

resource "aws_cloudfront_origin_access_identity" "main" {
  comment = local.cf_oai_comment
}

data "template_file" "cloud_front_s3_access_policy" {
  template = file("./templates/cloud_front/cloud-front-access-s3-policy.json")

  vars = {
    CLOUD_FRONT_ACCESS_IDENTITY = aws_cloudfront_origin_access_identity.main.iam_arn
    S3_BUCKET_ARN_ACCESS_PATH   = var.s3_bucket_arn_access_path
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloud_front" {
  bucket = var.s3_bucket_bucket_name
  policy = data.template_file.cloud_front_s3_access_policy.rendered
}
