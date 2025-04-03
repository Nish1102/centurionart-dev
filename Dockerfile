# Stage 1: Build the React frontend
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build


# Stage 2: Serve the app using `serve`
FROM node:16-slim

RUN npm install -g serve

WORKDIR /app


COPY --from=build /app/dist ./dist

EXPOSE 3005

CMD ["serve", "-s", "dist", "-l", "3005"]

