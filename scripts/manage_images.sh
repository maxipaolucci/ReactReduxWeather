#!/bin/bash

IMAGE_TAG='latest'

if [ "$CURRENT_BRANCH" != "master" ]; then
  IMAGE_TAG=$CURRENT_BRANCH
fi

if [[ "$CURRENT_BRANCH" == "master" ]]; then
  # build image
  docker build -t $ECR_REGISTRY/$ECR_REPO_NAME:$IMAGE_TAG .
  # uplaod to ECR
  docker push $ECR_REGISTRY/$ECR_REPO_NAME:$IMAGE_TAG
else
  echo
  echo "Image push is skipped in branch '$CURRENT_BRANCH'. Only 'master' branches push images to ECR in this exercise"
  echo
  
  # we build anyway to run the tests
  docker build -t $ECR_REPO_NAME .
fi