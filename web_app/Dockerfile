FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
CMD ["npm", "start"]