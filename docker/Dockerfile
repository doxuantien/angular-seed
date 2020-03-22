# Stage 1
FROM node:12.7-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=builder /usr/src/app/dist/app /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
