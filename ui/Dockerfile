FROM node:11-alpine as builder
COPY . /ui
WORKDIR /ui
RUN yarn install

CMD ["yarn", "start"]
