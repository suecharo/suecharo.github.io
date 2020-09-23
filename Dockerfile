FROM node:14-buster-slim

RUN apt update && apt install -y \
    build-essential \
    g++ \
    python \
    tini \
    && apt autoremove \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
EXPOSE 3000

ENTRYPOINT ["tini", "--"]
CMD ["tail", "-f", "/dev/null"]
