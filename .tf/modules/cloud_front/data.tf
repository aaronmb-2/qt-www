########################################
# Module CloudFront - data
########################################

locals {
  distribution_enabled             = true
  distribution_default_root_object = "index.html"
  distribution_allowed_methods     = ["GET", "HEAD"]

  forward_query_string = false
  cookie_forward       = "none"

  viewer_protocol_policy = "redirect-to-https"
  min_ttl                = 0
  default_ttl            = 3600
  max_ttl                = 86400

  geo_restriction_type      = "whitelist"
  geo_restriction_locations = ["US", "CA", "GB", "DE", "NL"]

  certificate_default = true

  cf_oai_comment = "${lower(var.app_name)}-${var.env}"
  tags = merge(
    var.tags
  )
}