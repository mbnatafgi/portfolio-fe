FROM node:lts-alpine AS builder

WORKDIR /app

ADD ./package.json /app/package.json

RUN npm install

ADD . /app

ARG REACT_APP_GA_ID

RUN REACT_APP_GA_ID=$REACT_APP_GA_ID npm run build

FROM alpine

COPY --from=builder /app/build/ /app/build/

RUN echo -e "rm -rf /build/* \ncp -r /app/build/* /build" > container_start.sh

ENTRYPOINT [ "sh", "container_start.sh" ]