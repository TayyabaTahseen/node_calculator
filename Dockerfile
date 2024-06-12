# Use the official Node.js image.
FROM node:14

# Create and set the working directory.
WORKDIR /usr/src/app

# Copy the project files to the container working directory.
COPY . .

# Install project dependencies.
RUN npm install --only=production

# Start the application.
CMD [ "npm", "run", "start" ]
