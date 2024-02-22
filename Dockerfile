# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /oriloye_toyyib_coding_assignment_11

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 7775

# Command to run the application
CMD ["npm", "start"]
