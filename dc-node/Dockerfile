FROM node:14
RUN npm install -g nodemon
RUN echo '====> INSTALLING npm PACKAGES <===='
# RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache
COPY package.json .
RUN npm install

WORKDIR /var/www/dc-node
COPY package.json /var/www/dc-node
COPY . .
# COPY entrypoint.sh /var/www/dc-node

RUN npm install
EXPOSE 8080
CMD nodemon index.js

# This doesn't work. entrypoint.sh won't run from command of docker. Error:
# usr/local/bin/docker-entrypoint.sh Permission denied
# RUN chmod +x /var/www/dc-node/entrypoint.sh
# RUN ./entrypoint.sh

# CMD ["nodemon", "/var/www/dc-node/index.js"]