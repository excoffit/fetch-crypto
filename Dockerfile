FROM node as base

WORKDIR /app

COPY ./my-app/package*.json ./
RUN npm ci
COPY ./my-app .

FROM base as test

RUN ["yarn","test"]

FROM base as build

CMD [ "yarn","start" ]
