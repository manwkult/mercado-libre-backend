# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage
WORKDIR /app
COPY . .

RUN npm install

ENV NODE_ENV development
CMD ["npm", "run", "dev"]
