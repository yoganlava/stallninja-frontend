FROM node:12.15.0

RUN mkdir -p /home/ec2-user/app/client
WORKDIR /home/ec2-user/app/client

COPY . .

RUN npm i

RUN npm run build

EXPOSE 80
 
CMD npm start
