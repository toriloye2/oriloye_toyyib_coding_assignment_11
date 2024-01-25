# Web Application

This is a web application created with Create React App. It can be run using Docker. Follow the instructions below to get the web application running on `localhost:7775`.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/) installed on your machine.

## Build and Run the Docker Container

Open a terminal and navigate to the directory containing the Dockerfile.

```bash
# Build the Docker image
docker build -t .oriloye_toyyib_coding_assignment11

# Run the Docker container
docker run -it --rm -p 7775:3000 oriloye_toyyib_coding_assignment11
