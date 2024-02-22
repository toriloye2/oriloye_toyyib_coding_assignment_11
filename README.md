# Web Application

<<<<<<< Updated upstream
This is a web application created with Create React App. It can be run using Docker..
=======
This is a web application created with Create React App. It can be run using Docker.
>>>>>>> Stashed changes

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/) installed on your machine.


We bring in the essential instructions (package.json and package-lock.json) for our application, similar to placing a recipe and ingredients in our workspace.

We build our application by installing necessary tools and libraries, akin to setting up a kitchen with utensils and ingredients.

We move in all the remaining files, like bringing in furniture, decorations, and other items to our workspace.

We specify the entrance or port for our application, like putting a sign outside our house indicating the door to knock on.



## Build and Run the Docker Container

Open a terminal and navigate to the directory containing the Dockerfile.


# Build the Docker image
docker build -t hh .

# Run the Docker container
docker run -it -p 7775:3000 hh
