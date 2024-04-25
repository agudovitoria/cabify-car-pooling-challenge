FROM node:lts-alpine
# |ENV NODE_OPTIONS=--max-old-space-size=1500
RUN apk update && apk upgrade

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

WORKDIR /home/node

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . ./

RUN yarn build

USER node
EXPOSE 8080
CMD ["node", "dist/main.js"]
