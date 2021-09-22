# nuxt-tw-gsap-system-starter

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
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

```bash


```

## Alerts/Notification Styles Current

```css
.alert-info {
  background-color: #d8edf6;
  border-color: #7dabc8;
  color: #3385b2;
}

.alert-success {
  background-color: #ddf1da;
  border-color: #9ec4a2;
  color: #468847;
}

.alert-danger,
.alert-error {
  background-color: #f3dede;
  border-color: #dea9a9;
  color: #cc2930;
}

.alert-warning {
  color: #664f2b;
  background-color: #f3eadd;
  border-color: #efe2cf;
}
```

### this project setup

tailwind
[@tailwindccs/typography](https://github.com/tailwindlabs/tailwindcss-typography#installation)
[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms#installation)
[@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp#installation)
[@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio#installation)

[nuxt/tailwind](https://tailwindcss.nuxtjs.org/)

[@nuxtjs/svg - nuxt svg module](https://github.com/nuxt-community/svg-module#installation)
[@nuxtjs/google-fonts](https://github.com/nuxt-community/google-fonts-module#setup)
[nuxt-gsap-module](https://github.com/ivodolenc/nuxt-gsap-module#quick-start)
[@nuxt/content](https://content.nuxtjs.org/installation)
[@nuxtjs/color-mode](https://color-mode.nuxtjs.org/#setup)

```bash

yarn create nuxt-app ascend-notifications

yarn add @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography @nuxt/content

yarn add --dev nuxt-gsap-module @nuxtjs/svg @nuxtjs/google-fonts @nuxtjs/color-mode



// develop/build
cd ascend-notifications

// develop
yarn dev

// build static for deployment to firebase
yarn generate

// deploy to ascend-notifications.app.web
firebase hosting deploy

```

### tailwind config

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

Firebase Hosting and Authentication provide via Google Firebase
