FROM node:latest as build

LABEL maintainer="Pedro Bedoya ingpedrobedoya@gmail.com"

COPY package.json package-lock.json ./
RUN npm install && mkdir /server && mv ./node_modules ./server
WORKDIR /server
COPY . ./
RUN npm run build

FROM node:latest as production


WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .

COPY --from=build /server/dist ./dist

CMD ["node", "dist/main"]