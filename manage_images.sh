#!/bin/bash

IMAGE_TAG='latest'

if [ "$CURRENT_BRANCH" != "master" ]; then
  IMAGE_TAG=$CURRENT_BRANCH
fi

echo
echo "Current branch: $CURRENT_BRANCH -- Images tag: $IMAGE_TAG"
echo

if [[ "$CURRENT_BRANCH" == "master" ]]; then
  aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/r5c3t5z5
  # build image
  docker build -t public.ecr.aws/r5c3t5z5/flo2cash_exercise:$IMAGE_TAG .
  # uplaod to ECR
  docker push public.ecr.aws/r5c3t5z5/flo2cash_exercise:$IMAGE_TAG
else
  echo
  echo "Image push is skipped in branch '$CURRENT_BRANCH'. Only 'master' branches push images to ECR in this exercise"
  echo
  
  # we build anyway to run the tests
  docker build -t flo2cash_exercise .
fi