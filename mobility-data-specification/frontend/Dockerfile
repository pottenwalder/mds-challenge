FROM node:18

WORKDIR /src

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
