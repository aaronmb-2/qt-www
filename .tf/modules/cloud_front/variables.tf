########################################
# Common Meta Data
########################################
variable "env" {
  description = "The name of the environment."
  type        = string
}

variable "app_name" {
  description = "The name of the application."
  type        = string
}

variable "region" {
  description = "The AWS region this bucket should reside in."
  type        = string
}

variable "tags" {
  description = "A mapping of tags to assign to the resources."
  type        = map(any)
}

########################################
# Module CloudFront - variables
########################################
variable "s3_bucket_bucket_regional_domain_name" {
  description = "Domainname of the S3 bucket"
  type        = string
}

variable "s3_bucket_bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
}

variable "s3_bucket_region" {
  description = "Region of the S3 bucket"
  type        = string
}

variable "s3_bucket_arn_access_path" {
  description = "ARN of the S3 bucket that is created"
  type        = string
}

variable "url_route53_record_env" {
  description = "URL with environment prefix"
  type        = string
}

variable "url_route53_record_www_env" {
  description = "URL with environment and www prefix"
  type        = string
}