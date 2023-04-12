########################################
# Module ACM - main
########################################
resource "aws_acm_certificate" "main" {
  domain_name               = var.hosted_zone_name
  subject_alternative_names = [var.url_route53_record_env, var.url_route53_record_www_env]
  validation_method         = local.certificate_validation_method
}

resource "aws_acm_certificate_validation" "env" {
  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [var.route53_record_env_fqdn]
}

resource "aws_acm_certificate_validation" "www-env" {
  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [var.route53_record_www_env_fqdn]
}