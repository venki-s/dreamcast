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
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]
#docker build . -t venkis/castingzones
#docker push  venkis/castingzones