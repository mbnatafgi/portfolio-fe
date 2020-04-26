FROM node:lts-alpine AS builder

WORKDIR /app

ADD ./package.json /app/package.json

RUN npm install

ADD . /app

RUN npm run build

FROM alpine

COPY --from=builder /app/build/ /app/build/

RUN echo -e "rm -rf /build/* \ncp -r /app/build/* /build" > container_start.sh

ENTRYPOINT [ "sh", "container_start.sh" ]