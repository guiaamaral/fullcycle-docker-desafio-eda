FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install \
    && yarn build

EXPOSE 3003

CMD ["yarn", "start:prod"]
