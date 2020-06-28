FROM node:12

WORKDIR /app

COPY package.json package.json

RUN npm install -g gatsby-cli
RUN npm install

COPY . .

EXPOSE 8000

ENV NODE_TLS_REJECT_UNAUTHORIZED 0
CMD [ "gatsby", "develop", "--host=0.0.0.0" ]
