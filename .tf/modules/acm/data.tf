########################################
# Module ACM - data
########################################

locals {
  aws_provider_region = "us-east-1"
  aws_provider_alias = "virginia"

  certificate_validation_method = "DNS"

  tags = merge(
    var.tags
  )
}