# Use official Node.js LTS (Long Term Support) image as the base
FROM node:18-alpine3.18 

EXPOSE 4200

# Set working directory
WORKDIR /app

RUN apk --no-cache add curl nano
# Copy package.json and package-lock.json to work directory
COPY package*.json ./

RUN  npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

