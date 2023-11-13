FROM node:20 AS build

WORKDIR /it-test

COPY package.json .
RUN npm install

COPY . .

RUN npm run build
# CMD ["npm", "run", "build"]
# Этап 2: развертывание с использованием Nginx
FROM nginx:alpine

# Копируем статические файлы из этапа сборки
COPY --from=build /it-test/build /usr/share/nginx/html

# Копируем ваш файл конфигурации
COPY .nginx/*.conf /etc/nginx/conf.d/

# RUN cat /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]