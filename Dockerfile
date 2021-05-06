FROM node:14.6.0

WORKDIR /app
COPY package*.json /app/
RUN npm install
CMD npm run start