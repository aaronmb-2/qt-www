########################################
# Module CloudFront - main
########################################
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = var.s3_bucket_bucket_regional_domain_name
    origin_id                = var.s3_bucket_bucket_name
  }

  enabled              = true

  default_root_object = "index.html"

  aliases = ["dev.quanttrade.io", "www.dev.quanttrade.io"]

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