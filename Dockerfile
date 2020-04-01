FROM node:13-buster-slim

ADD https://github.com/krallin/tini/releases/download/v0.18.0/tini /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini

RUN apt-get update && apt-get install -y \
    build-essential \
    g++ \
    python \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

ENTRYPOINT ["tini", "--"]
CMD ["tail", "-f", "/dev/null"]
