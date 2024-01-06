FROM --platform=linux node:17 as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --platform linux

FROM --platform=linux/amd64 nginx:1.25.3-alpine-slim
COPY --from=build /app/build /usr/share/nginx/html
