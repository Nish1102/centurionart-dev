# Stage 1: Build the frontend
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the code and build the frontend
COPY . .
RUN npm run build

# Stage 2: Serve the built files with Nginx
FROM nginx:alpine

# Copy the built frontend from the builder stage to the Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port Nginx uses (we will map this to host port 3005)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
