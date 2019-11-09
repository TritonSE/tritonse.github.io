FROM node:10

WORKDIR /app

COPY package.json package.json
COPY plugins/tritonse-source-firestore/package.json plugins/tritonse-source-firestore/package.json

RUN npm install -g gatsby-cli
RUN npm install
RUN npm install --prefix plugins/tritonse-source-firestore

COPY . .

EXPOSE 8000

ENV NODE_TLS_REJECT_UNAUTHORIZED 0
CMD [ "gatsby", "develop", "--https" ]
