########################################
# Module CloudFront - outputs
########################################
output "cloud_front_dns_name" {
  description = "DNS Name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "cloud_front_zone_id" {
  description = "Zone ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
}