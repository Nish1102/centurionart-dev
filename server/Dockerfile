# Use the official Node.js image as the base
FROM node:16

# Set working directory
WORKDIR /app

# Copy only necessary files first (for layer caching)
COPY package*.json ./

# Install backend dependencies
RUN npm install --legacy-peer-deps

# Copy backend source code
COPY . .

# Expose the port your app actually uses
EXPOSE 3006

# Start the backend application
CMD ["node", "app.js"]

