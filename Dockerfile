FROM mhart/alpine-node:9

WORKDIR /app
COPY . /app

RUN    rm -rf node_modules \
    && rm package-lock.json \
    && npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 3000
CMD ["node", "app.js"]
