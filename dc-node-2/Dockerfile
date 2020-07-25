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
EXPOSE 9000
CMD nodemon index.js
