FROM node as base

WORKDIR /app

COPY package*.json ./

FROM base as test
RUN npm ci
COPY . .
RUN ["yarn","test"]

FROM base as build
RUN npm ci
COPY . .
CMD [ "yarn","start" ]
