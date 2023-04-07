########################################
# QuantTrade WWW composition
########################################

########################################
## Terraform S3 Bucket - Static Hosting
########################################
module "s3_bucket_static_hosting" {
  source = "../../../../modules/s3"

  ## Common Meta Data ##
  env      = var.env
  app_name = var.app_name
  tags     = local.tags
  region   = var.region

  ## S3 variables ##
  bucket_name             = var.s3_bucket_static_hosting_name
  force_destroy           = var.s3_bucket_static_hosting_force_destroy
  versioning_enabled      = var.s3_bucket_static_hosting_versioning_enabled
  block_public_policy     = var.s3_bucket_static_hosting_block_public_policy
  block_public_acls       = var.s3_bucket_static_hosting_block_public_acls
  ignore_public_acls      = var.s3_bucket_static_hosting_ignore_public_acls
  restrict_public_buckets = var.s3_bucket_static_hosting_restrict_public_buckets
}