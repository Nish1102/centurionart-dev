# Use an official lightweight Node.js image
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy all source code
COPY . .

# Expose the port that the app uses (set to 3006)
EXPOSE 3006

# Start the application
CMD ["npm", "start"]
