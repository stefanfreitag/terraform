output "instance_dns" {
  value = aws_instance.hello_world.public_dns
}