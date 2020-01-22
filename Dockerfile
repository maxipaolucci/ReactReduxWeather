FROM node:10-alpine

RUN apk add curl

# Change working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 4444

# RUN ls -lh && mkdir test_dir && ls -lh

# # Run the tests
# RUN npm run test

# Launch application
CMD ["npm","run","start"]
