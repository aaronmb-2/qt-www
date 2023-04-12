########################################
# Module Route53 - main
########################################

data "aws_route53_zone" "main" {
  name         = var.hosted_zone_name
  private_zone = var.hosted_zone_private
}

# data "aws_route53_zone" "main" {
#   zone_id = "Z08089993NO0S6W7Z3GAV"
# }

resource "aws_route53_record" "env" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = local.route53_record_env
  type    = local.route53_record_type

  alias {
    name                   = var.cloud_front_dns_name
    zone_id                = var.cloud_front_zone_id
    evaluate_target_health = local.route53_evaluate_target_heatlh
  }
}

resource "aws_route53_record" "www_env" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = local.route53_record_www_env
  type    = local.route53_record_type

  alias {
    name                   = var.cloud_front_dns_name
    zone_id                = var.cloud_front_zone_id
    evaluate_target_health = local.route53_evaluate_target_heatlh
  }
}