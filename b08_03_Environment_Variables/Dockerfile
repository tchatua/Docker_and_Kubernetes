# Use the official Node.js 22 image based on Alpine Linux
# Alpine is lightweight, which helps keep the image small
FROM node:22-alpine

# Set the working directory inside the container
# All subsequent commands will run from /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
# This allows Docker to cache the npm install layer
COPY package*.json .

# Install dependencies using npm ci
# npm ci:
# - Is faster and more reliable than npm install
# - Uses package-lock.json exactly
# - Fails if package-lock.json is missing or out of sync
RUN npm ci

# Copy the rest of the application source code into the container
COPY . .

ENV PORT=3002
ENV APP_NAME="My Awesome Application"

CMD ["node", "src/index.js"]
