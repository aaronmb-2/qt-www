########################################
# Module Route53 - data
########################################

locals {
  route53_record_dev     = "${var.env}.${var.hosted_zone_name}"
  route53_record_www_dev = "www.${var.env}.${var.hosted_zone_name}"
  route53_record_type    = "A"
  route53_record_ttl     = 300

  route53_evaluate_target_heatlh = true
}