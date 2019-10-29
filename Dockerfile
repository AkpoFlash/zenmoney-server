FROM node:10-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
EXPOSE 3001
CMD ["npm", "start"]
