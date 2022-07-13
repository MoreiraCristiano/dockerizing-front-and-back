FROM node:alpine3.11
RUN mkdir -p /app
RUN npm install -g npm@8.13.2
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]