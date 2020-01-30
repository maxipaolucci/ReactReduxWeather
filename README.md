# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

### Docker commands

Build the image from dockerfile
> docker build -t weather-app-img .

Run container (no volume)
> docker run --rm -p 5555:4444 --name weather-app weather-app-img

Run container with src mounted in volume
NOTE: In dockerfile to do this remember to comment line COPY . .  and uncomment COPY ./package.json ./
NOTE 2: In dockerfile uncomment line VOLUME ["/app"]
> docker run --rm -p 5555:4444 -v <ABSOLUTE_PATH_TO_PROJECT_HOST_MACHINE>:/app -v /app/node_modules --name weather-app weather-app-img

To access the shell to the running container
> docker exec -ti weather-app sh

To list all containers
> docker container ls -a

To list all images
> docker images

To inspect and image
> docker image inspect <IMAGE_ID>
