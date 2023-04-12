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
# Module ACM - variables
########################################
variable "hosted_zone_name" {
  description = "Name of the hosted zone we want to retrieve"
  type        = string
}

variable "route53_zone_id" {
  description = "The zone ID of the Route53 resource"
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

variable "route53_record_env_fqdn" {
  description = "FQDN for Route53 record with www prefix"
  type        = string
}

variable "route53_record_www_env_fqdn" {
  description = "FQDN for Route53 record with environment and www prefix"
  type        = string
}