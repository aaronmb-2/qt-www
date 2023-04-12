########################################
# Module ACM - outputs
########################################
output "aws_acm_certificate_arn" {
  description = "ARN of the ACM Certificate"
  value       = aws_acm_certificate.www_and_env.arn
}