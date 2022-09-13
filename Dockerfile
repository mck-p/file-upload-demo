FROM node:16

WORKDIR /app

COPY . .

RUN yarn

ENV PORT=5000

CMD ["node", "-r", "dotenv-flow/config", "app/server.js"]