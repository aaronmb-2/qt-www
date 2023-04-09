########################################
# Module CloudFront - data
########################################

locals {
  cf_oai_comment = "${lower(var.app_name)}-${var.env}"
  tags = merge(
    var.tags
  )
}