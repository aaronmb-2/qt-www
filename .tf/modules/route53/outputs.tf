########################################
# Module Route53 - outputs
########################################
output "url_route53_record_env" {
  description = "URL with environment prefix"
  value       = local.route53_record_env
}

output "url_route53_record_www_env" {
  description = "URL with environment and www prefix"
  value       = local.route53_record_www_env
}