FROM node:alpine
WORKDIR /app
COPY . .

RUN npm install

ENV NODE_ENV production
EXPOSE 3000
USER node
CMD ["npm", "run", "start"]
