FROM node
MAINTAINER Nathan LeClaire <nathan@docker.com>

RUN npm install sails -g
RUN npm install nodemon -g
RUN npm install grunt-cli -g

EXPOSE 1337

RUN mkdir -p /data/app
WORKDIR /data/app

CMD ["nodemon", "/data/app/app.js"]
