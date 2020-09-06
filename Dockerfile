FROM mhart/alpine-node:12

WORKDIR /app/

COPY . .

RUN yarn

EXPOSE 3000 

CMD [ "node", "index.js" ]