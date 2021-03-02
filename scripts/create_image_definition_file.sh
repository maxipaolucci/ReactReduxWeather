#!/bin/bash
IMAGE_TAG='latest'

if [ "$CURRENT_BRANCH" != "master" ]; then
  IMAGE_TAG=$CURRENT_BRANCH
fi

cat > imagedefinitions.json  <<EOT
[
  {
    "name": "flo2cash_exercise_app",
    "imageUri": "${ECR_REGISTRY}/${ECR_REPO_NAME}:${IMAGE_TAG}"
  }
]
EOT

echo "image definitio file generated!"
echo 
cat imagedefinitions.json