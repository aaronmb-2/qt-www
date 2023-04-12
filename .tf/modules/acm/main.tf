########################################
# Module ACM - main
########################################
resource "aws_acm_certificate" "env" {
  domain_name       = var.url_route53_record_env
  validation_method = local.certificate_validation_method

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "www_env" {
  domain_name       = var.url_route53_record_www_env
  validation_method = local.certificate_validation_method

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "env" {
  for_each = {
    for dvo in aws_acm_certificate.env.domain_validation_options : dvo.domain_name => {
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
  zone_id         = var.route53_zone_id
}

resource "aws_route53_record" "www_env" {
  for_each = {
    for dvo in aws_acm_certificate.www_env.domain_validation_options : dvo.domain_name => {
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
  zone_id         = var.route53_zone_id
}

resource "aws_acm_certificate_validation" "env" {
  certificate_arn         = aws_acm_certificate.env.arn
  validation_record_fqdns = [for record in aws_route53_record.env : record.fqdn]
}

resource "aws_acm_certificate_validation" "www_env" {
  certificate_arn         = aws_acm_certificate.www_env.arn
  validation_record_fqdns = [for record in aws_route53_record.www_env : record.fqdn]
}