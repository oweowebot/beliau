FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN node . --db "mongodb+srv://zifabotz:ztwo2016@cluster0.xlzq3dr.mongodb.net/?retryWrites=true&w=majority" --autocleartmp --restrict

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
