FROM node:13-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
EXPOSE 3001
CMD ["npm", "run", "prod"]
