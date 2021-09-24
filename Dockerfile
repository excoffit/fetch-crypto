FROM node as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

FROM base as test
RUN ["yarn","test"]

FROM base as build
EXPOSE 3000
CMD [ "yarn","start" ]
