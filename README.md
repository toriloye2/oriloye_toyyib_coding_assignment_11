# Web Application

This is a web application created with Create React App. It can be run using Docker..

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/) installed on your machine.

## Build and Run the Docker Container

Open a terminal and navigate to the directory containing the Dockerfile.


# Build the Docker image
docker build -t .hh

# Run the Docker container
docker run -it -p 7775:3000 hh
