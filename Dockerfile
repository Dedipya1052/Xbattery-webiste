FROM node:18-alpine 
# Set working directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY . .

# Install app dependencies
#RUN npm install

# Build the Angular app
#CMD ["npm" ,"run", "dev"]
#EXPOSE 3000


RUN npm install  
RUN npm cache clean --force 
RUN npm run build
RUN rm -rf /tmp/*
CMD [ "npm", "start" ]
EXPOSE 5000
