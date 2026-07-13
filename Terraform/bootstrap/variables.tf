variable "aws_region" {
  description = "The AWS region to deploy resources in."
  type        = string
  default     = "ap-south-2"
}

variable "bucket_name" {
  description = "The name of the S3 bucket to create."
  type        = string
  default     = "my-terraform-bucket"
}

variable "dynamodb_table_name" {
  description = "The name of the DynamoDB table to create."
  type        = string
  default     = "my-terraform-lock-table"
}