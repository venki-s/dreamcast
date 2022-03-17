FROM node:16
#EXPORT NODE_OPTIONS=--openssl-legacy-provider
##WORKDIR /src
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./

#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
#COPY . .
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps
RUN npm install -g nodemon --legacy-peer-deps
COPY . /app
EXPOSE 3000
#CMD ["nodemon", "-L"]
#CMD ["npm", "start"]
CMD ["nodemon", "bin/www"]
#docker build . -t venkis/castingzones
#docker push  venkis/castingzones