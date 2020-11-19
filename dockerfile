# Construction du livrable
FROM node:12.14 as build

WORKDIR /src
COPY    package.json yarn.lock /src/

RUN yarn install

COPY . /src

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /src/build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]