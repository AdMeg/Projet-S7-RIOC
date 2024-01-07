FROM node:lts-alpine
WORKDIR /projet_RIOC
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 5000

