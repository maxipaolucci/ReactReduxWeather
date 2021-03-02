### Docker commands

Build the image from dockerfile
> docker build -t weather-app-img .

Run container 
> docker run --rm -p 5555:4444 --name weather-app weather-app-img

To access the shell to the running container
> docker exec -ti weather-app sh

To list all containers
> docker container ls -a

To list all images
> docker images

To inspect and image
> docker image inspect <IMAGE_ID>
