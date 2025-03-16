FROM node:current-alpine

RUN mkdir -p /home/node/app/node_modules /home/node/app/config && ln -s /home/node/app/config/.env /home/node/app/.env && chown -R node:node /home/node/app && apk add --no-cache nano pnpm

WORKDIR /home/node/app

COPY . ./

RUN pnpm install && pnpm run build

USER node

# RUN npm run build

COPY --chown=node:node . .

EXPOSE 7777

CMD [ "node", "./dist/index.js" ]
