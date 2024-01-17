# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container to /src
WORKDIR /src

# First copy package.json and yarn.lock files
COPY package*.json ./
COPY yarn*.lock ./

# Install project dependencies
RUN yarn install

# Then copy the rest of the application code to the working directory
COPY . .

# Define the command to run the application
CMD ["yarn", "dev"]