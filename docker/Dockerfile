FROM node:lts-alpine as builder

RUN mkdir -p /home/node/app && \
    chown node:node /home/node/app

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json yarn.lock ./
RUN yarn --frozen-lockfile --registry=http://registry.npmmirror.com

COPY --chown=node:node . .

RUN yarn build

FROM nginx:stable-alpine

USER nginx

EXPOSE 80

COPY --chown=nginx:nginx --from=builder /home/node/app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx ./nginx.conf /etc/nginx/conf.d/default.conf
