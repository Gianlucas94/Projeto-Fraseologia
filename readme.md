# Fraseologia
Made by [Vitor Melo](https://github.com/vtmx)

## Build Setup

```bash
# install dependencies
yarn install

# install modules
yarn add sass-loader
yarn add node-sass
yarn add uikit

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate

# build dist site and deploy to surge
yarn deploy

#surge deploy
npm run generate && surge --project dist/ --domain fraseologia4m.surge.sh

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
