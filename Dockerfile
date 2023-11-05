FROM node:latest
WORKDIR /home/mywebapp
COPY package.json  ./
RUN npm install
COPY . .
CMD [ "server.js" ]