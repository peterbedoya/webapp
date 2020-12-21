FROM node:latest as build

LABEL maintainer="Pedro Bedoya ingpedrobedoya@gmail.com"

COPY package.json package-lock.json ./
RUN npm install && mkdir /client && mv ./node_modules ./client
WORKDIR /client
COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=build /client/dist/client /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80