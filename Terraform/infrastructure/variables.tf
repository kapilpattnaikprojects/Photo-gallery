variable "aws_region" {

  description = "The AWS region to deploy resources in."
  type        = string
  default     = "ap-south-2"

}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

variable "public_subnet_cidrs" {
  description = "CIDR block for the public subnet"
  type        = list(string)
}

variable "private_subnet_cidrs" {
  description = "CIDR block for the private subnet"
  type        = list(string)
}


variable "frontend_repository_name" {
  description = "Frontend ECR repository name"
  type        = string
}

variable "backend_repository_name" {
  description = "Backend ECR repository name"
  type        = string
}

variable "cluster_name" {
  type = string
}

variable "cluster_version" {
  type = string
}

variable "node_instance_type" {
  type = string
}

variable "desired_size" {
  type = number
}

variable "min_size" {
  type = number
}

variable "max_size" {
  type = number
}