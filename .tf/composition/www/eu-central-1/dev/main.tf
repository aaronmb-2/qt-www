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

###############################################
## Terraform Cloud Front - CDN Web Distribution
###############################################
module "cloud_front_distribution" {
  source = "../../../../modules/cloud_front"

  ## Common Meta Data ##
  env      = var.env
  app_name = var.app_name
  tags     = local.tags
  region   = var.region

  ## S3 variables ##
  s3_bucket_bucket_regional_domain_name = module.s3_bucket_static_hosting.s3_bucket_bucket_regional_domain_name
  s3_bucket_bucket_name                 = module.s3_bucket_static_hosting.s3_bucket_bucket_name
  s3_bucket_region                      = module.s3_bucket_static_hosting.s3_bucket_region
  s3_bucket_arn_access_path             = module.s3_bucket_static_hosting.s3_bucket_arn_access_path

  ## Route53 variables ##
  url_route53_record_env     = module.route53_dns_routing.url_route53_record_env
  url_route53_record_www_env = module.route53_dns_routing.url_route53_record_www_env
}

###############################################
## Terraform Route53 - DNS & Routing
###############################################
module "route53_dns_routing" {
  source = "../../../../modules/route53"

  ## Common Meta Data ##
  env      = var.env
  app_name = var.app_name
  tags     = local.tags
  region   = var.region

  ## S3 variables ##
  hosted_zone_name    = var.route53_hosted_zone_name
  hosted_zone_private = var.route53_hosted_zone_private

  cloud_front_dns_name = module.cloud_front_distribution.cloud_front_dns_name
  cloud_front_zone_id  = module.cloud_front_distribution.cloud_front_zone_id
}

###############################################
## Terraform ACM - Certificates
###############################################
module "acm_certificates" {
  source = "../../../../modules/acm"

  ## Common Meta Data ##
  env      = var.env
  app_name = var.app_name
  tags     = local.tags
  region   = var.region

  ## Route53 variables ##
  hosted_zone_name            = var.route53_hosted_zone_name
  route53_zone_id             = module.route53_dns_routing.route53_zone_id
  url_route53_record_env      = module.route53_dns_routing.url_route53_record_env
  url_route53_record_www_env  = module.route53_dns_routing.url_route53_record_www_env
  route53_record_env_fqdn     = module.route53_dns_routing.route53_record_env_fqdn
  route53_record_www_env_fqdn = module.route53_dns_routing.route53_record_www_env_fqdn
}