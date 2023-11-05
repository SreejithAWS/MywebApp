FROM node:latest
WORKDIR /home/mywebapp
COPY package.json  ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "server.js" ]
