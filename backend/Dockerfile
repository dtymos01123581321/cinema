FROM node:10.16.0-alpine

ENV NODE_ENV=production

WORKDIR /app

# Add support for https on wget
RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "run", "start"]
