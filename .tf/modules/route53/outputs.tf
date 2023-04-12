########################################
# Module Route53 - outputs
########################################
output "route53_zone_id" {
  description = "The zone ID of the Route53 resource"
  value       = data.aws_route53_zone.main.zone_id
}

output "url_route53_record_env" {
  description = "URL with environment prefix"
  value       = local.route53_record_env
}

output "url_route53_record_www_env" {
  description = "URL with environment and www prefix"
  value       = local.route53_record_www_env
}

output "route53_record_env_fqdn" {
  description = "FQDN for Route53 record with www prefix"
  value       = aws_route53_record.env.fqdn
}

output "route53_record_www_env_fqdn" {
  description = "FQDN for Route53 record with environment and www prefix"
  value       = aws_route53_record.www_env.fqdn
}