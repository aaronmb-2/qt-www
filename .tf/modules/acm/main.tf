########################################
# Module ACM - main
########################################
resource "aws_acm_certificate" "main" {
  domain_name               = var.hosted_zone_name
  subject_alternative_names = [var.url_route53_record_env, var.url_route53_record_www_env]
  validation_method         = local.certificate_validation_method
}

# resource "aws_route53_record" "env" {
#   zone_id = var.hosted_zone_name
#   type    = "CNAME"
#   ttl     = 60
#   name    = aws_acm_certificate.main.domain_name.resource
#   records        = ["dev.example.com"]
# }

# resource "aws_route53_record" "main" {
#   allow_overwrite = true
#   name            = tolist(aws_acm_certificate.main.domain_validation_options)[0].resource_record_name
#   records         = [tolist(aws_acm_certificate.main.domain_validation_options)[0].resource_record_value]
#   type            = tolist(aws_acm_certificate.main.domain_validation_options)[0].resource_record_type
#   zone_id         = var.hosted_zone_name
#   ttl             = 60
# }

resource "aws_route53_record" "example" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.hosted_zone_name
}


resource "aws_acm_certificate_validation" "env" {
  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [var.route53_record_env_fqdn]
}

resource "aws_acm_certificate_validation" "www_env" {
  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [var.route53_record_www_env_fqdn]
}