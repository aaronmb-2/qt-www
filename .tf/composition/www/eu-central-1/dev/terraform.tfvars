########################################
# Environment setting
########################################
region           = "eu-central-1"
role_name        = "Admin"
profile_name     = "quanttrade-www"
env              = "dev"
application_name = "quanttrade-www"
app_name         = "quanttrade-www"

## S3 bucket - Static Hosting ##
s3_bucket_static_hosting_name                    = "static-hosting"
s3_bucket_static_hosting_force_destroy           = false
s3_bucket_static_hosting_versioning_enabled      = "Disabled"
s3_bucket_static_hosting_block_public_policy     = true
s3_bucket_static_hosting_block_public_acls       = true
s3_bucket_static_hosting_ignore_public_acls      = true
s3_bucket_static_hosting_restrict_public_buckets = true