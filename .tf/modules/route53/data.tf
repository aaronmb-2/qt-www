########################################
# Module Route53 - data
########################################

locals {
  route53_record_env     = "${var.env}.${var.hosted_zone_name}"
  route53_record_www_env = "www.${var.env}.${var.hosted_zone_name}"
  route53_record_type    = "A"
  route53_record_ttl     = 300

  route53_evaluate_target_heatlh = true
}