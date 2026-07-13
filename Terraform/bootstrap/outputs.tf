output "terraform_state_bucket" {
  description = "S3 bucket used to store Terraform state files"
  value       = aws_s3_bucket.terraform_state.bucket
}

output "terraform_locks_table" {
  description = "DynamoDB table used to store Terraform locks"
  value       = aws_dynamodb_table.terraform_locks.name
}