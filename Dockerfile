FROM node:14.14.0-alpine3.12
WORKDIR /app
COPY . .

RUN npm install

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "run", "start"]
