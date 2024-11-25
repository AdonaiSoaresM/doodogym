FROM node:18.18.2-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18.18.2-alpine
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve

EXPOSE 3000
ENTRYPOINT serve -s build