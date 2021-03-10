# Docker commands

Build the image from dockerfile
> docker build -t flo2cash_exercise .

Run container 
> docker run --rm -p 4444:4444 --name flo2cash_exercise_app flo2cash_exercise

To access the shell to the running container
> docker exec -ti flo2cash_exercise_app sh

To list all containers
> docker container ls -a

To list all images
> docker images

To inspect and image
> docker image inspect <IMAGE_ID>

# CloudFormation

## create stack
aws cloudformation create-stack --stack-name flo2cash-master-codepipeline --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND --template-body file://codepipeline-cicd.yml

## delete stack
> aws cloudformation delete-stack --stack-name flo2cash-master-codepipeline
