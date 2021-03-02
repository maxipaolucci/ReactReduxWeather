#!/bin/bash

echo "Updating aws cli v2 to latest..."

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
which aws
ls -l /root/.pyenv/shims/aws
./aws/install --bin-dir /root/.pyenv/shims --install-dir /usr/local/aws-cli --update
aws --version

echo "aws cli updated"
