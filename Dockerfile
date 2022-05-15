FROM node:alpine
WORKDIR /app
COPY . .

RUN npm install
RUN npm config set unsafe-perm true
RUN mkdir /app/dist
RUN chown -R node /app/dist

ENV NODE_ENV production
EXPOSE 3000
USER node
CMD ["npm", "run", "start"]
