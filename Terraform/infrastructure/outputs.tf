output "vpc_id" {
  description = "ID of the VPC"
  value       = module.vpc.vpc_id
}


output "frontend_repository_url" {
  value = module.ecr.frontend_repository_url
}

output "backend_repository_url" {
  value = module.ecr.backend_repository_url
}