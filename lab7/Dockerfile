FROM node:24-alpine

WORKDIR /usr/src/app

COPY my-app/package*.json ./

RUN npm install

COPY my-app/ .

CMD ["npm", "start"]