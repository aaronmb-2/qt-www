########################################
# Module ACM - data
########################################

locals {
  certificate_validation_method = "DNS"

  tags = merge(
    var.tags
  )
}