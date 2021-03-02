#!/bin/bash
IMAGE_TAG='latest'

if [ "$CURRENT_BRANCH" != "master" ]; then
  IMAGE_TAG=$CURRENT_BRANCH
fi

cat > imagedefinitions.json  <<EOT
[
  {
    "name": "flo2cash_exercise_app",
    "imageUri": "public.ecr.aws/r5c3t5z5/flo2cash_exercise:${IMAGE_TAG}"
  }
]
EOT

echo "image definitio file generated!"
echo 
cat imagedefinitions.json