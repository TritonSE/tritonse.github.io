FROM node:10

WORKDIR /app

COPY . .

RUN npm install -g gatsby-cli
RUN npm install
RUN npm install --prefix plugins/tritonse-source-firestore

EXPOSE 8000
CMD [ "gatsby", "develop" ]
