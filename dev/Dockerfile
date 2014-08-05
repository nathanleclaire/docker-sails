FROM node
MAINTAINER Nathan LeClaire <nathan@docker.com>

RUN npm install sails -g
RUN npm install nodemon -g
RUN npm install grunt-cli -g

EXPOSE 1337

WORKDIR /data/sails_tinker/app
ENTRYPOINT ["nodemon", "app.js"]
