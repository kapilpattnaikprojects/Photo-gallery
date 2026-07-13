terraform {
  backend "s3" {
    bucket         = "kapil-photo-gallery-tf-state-2026"
    key            = "photo-gallery/terraform.tfstate"
    region         = "ap-south-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}