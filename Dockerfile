# Use the official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the React app code to the container
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the built app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5001

# Set the entry point to serve the built React app
CMD ["serve", "-s", "build", "-l", "5001"]
