########################################
# Module S3 - data
########################################

locals {
  bucket_name = "${lower(var.app_name)}-${var.bucket_name}-${var.env}"

  bucket_acl = "private"

  tags = merge(
    var.tags,
    tomap({
      "Name" = local.bucket_name
    })
  )
}