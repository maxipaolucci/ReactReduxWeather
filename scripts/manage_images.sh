#!/bin/bash

IMAGE_TAG='latest'

if [ "$CURRENT_BRANCH" != "master" ]; then
  IMAGE_TAG=$CURRENT_BRANCH
fi

# build image
docker build -t $ECR_REGISTRY/$ECR_REPO_NAME:$IMAGE_TAG .

if [[ "$CURRENT_BRANCH" == "master" ]]; then
  # uplaod to ECR
  docker push $ECR_REGISTRY/$ECR_REPO_NAME:$IMAGE_TAG
else
  echo
  echo "Image push is skipped in branch '$CURRENT_BRANCH'. Only 'master' branches push images to ECR in this exercise"
  echo
fi