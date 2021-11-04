
FROM node:alpine

ENV PM2_PUBLIC_KEY w2yza5gzxuvgueb
ENV PM2_SECRET_KEY hl0o4ysz1zp9fre

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node
RUN ls

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]