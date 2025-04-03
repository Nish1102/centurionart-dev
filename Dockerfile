# Build stage
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Serve stage
FROM node:16-slim

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 3005

CMD ["serve", "-s", "dist", "-l", "3005"]
