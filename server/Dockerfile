# Use the official Node.js image as the base
FROM node:16

# Set working directory
WORKDIR /app

# Copy only backend's package.json and lock file
COPY package*.json ./

# Install backend dependencies
RUN npm install --legacy-peer-deps

# Copy the entire backend source code
COPY . .

# Expose the port used by your backend (should match app.js listener)
EXPOSE 3006

# Start the backend application
CMD ["node", "app.js"]
