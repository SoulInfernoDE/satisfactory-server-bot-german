FROM node:current-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . ./

RUN npm install && npm run build

USER node

# RUN npm run build

COPY --chown=node:node . .

EXPOSE 7777

CMD [ "node", "./dist/index.js" ]
