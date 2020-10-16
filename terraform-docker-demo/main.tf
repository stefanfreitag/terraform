resource "docker_image" "flask-hello-world" {
  name         = "stefanfreitag/flask-hello-world:0.0.2"
  keep_locally = false
}

resource "docker_container" "flask-hello-world" {
  image = docker_image.flask-hello-world.latest
  name  = "flask-hello-world"
  ports {
    internal = 5000
    external = 80
  }
}