terraform {

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.31.0"
    }
  }
}

provider "aws" {
  profile = "cdk"
  region  = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-08d70e59c07c61a3a"
  instance_type = "t2.micro"
  subnet_id     = "subnet-0d65e3b43fa4a7ed9"
  tags = {
    Name = var.instance_name
  }
}