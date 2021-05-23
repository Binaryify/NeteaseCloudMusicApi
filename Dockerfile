FROM node:lts-alpine

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install --production

EXPOSE 3000
CMD ["node", "app.js"]
