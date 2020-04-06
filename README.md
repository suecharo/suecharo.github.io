# suecharo.github.io

> Hirotaka Suetake Web Page

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy dir
$ yarn deploy
```

## 使い方

- 基本的には、master branch で host されるため、nuxt generate した `./dist` 以下を master branch 内に push しなければならない
  - source code を develop branch で管理し、develop branch 上で push されたら、generate して dist 以下を master branch に push する
- 基本的に develop 以下の `src/assets/content.json` を追記していく
  - 基本的に html を記入できる
  - 写真などの静的ファイルは `src/static` 以下に置く
    - img の `src` などは、 `src/static/foo.png` の場合、 `<img src='foo.png'>` になる
