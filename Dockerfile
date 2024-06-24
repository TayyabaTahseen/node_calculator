# Use the official Node.js image.
FROM node:14

# Create and set the working directory.
WORKDIR /usr/src/app

COPY package*.json ./

# Install project dependencies.
RUN npm install --only=production


# Copy the project files to the container working directory.
COPY . .

# Start the application.
CMD [ "npm", "run", "start" ]
