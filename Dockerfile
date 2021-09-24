FROM node as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

FROM base as test
RUN ["npm","test"]

FROM base as build
EXPOSE 3000
CMD [ "npm","start" ]