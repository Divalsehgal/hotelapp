FROM node:15.3.0-alpine3.10

#first we have to take pull official and latest image of node alpine 
WORKDIR /app

# then you have to set working irectory

ENV PATH /app/node_modules/.bin:$PATH
#add node_modules path to the list of PATHs in your docker container
#expose all node modules to our PATH environment variable 
COPY ["package.json", "package-lock.json*", "./"]

#silent for avoid warning
RUN npm install --silent

COPY . ./
EXPOSE 3001/udp 3000/tcp

CMD ["npm", "start"]