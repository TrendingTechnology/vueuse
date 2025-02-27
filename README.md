<p align="center">
<img src="https://raw.githubusercontent.com/antfu/vueuse/master/resources/logo-vertical.png" alt="logo" width="300"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@vueuse/core" target="__blank"><img src="https://img.shields.io/npm/v/@vueuse/core?color=a1b858" alt="NPM version" /></a>
<a href="https://vueuse.netlify.com" target="__blank"><img src="https://img.shields.io/static/v1?label=storybook&message=demos&color=63ba83" alt="Storybook Demos" /></a>
<img alt="Dependencies" src="https://img.shields.io/david/antfu/vueuse?color=35495e"/>
<a href="https://github.com/antfu/vueuse" target="__blank"><img src="https://img.shields.io/github/last-commit/antfu/vueuse.svg?color=a38eed" alt="GitHub last commit" /></a>
<a href="https://github.com/antfu/vueuse/issues" target="__blank"><img src="https://img.shields.io/github/issues/antfu/vueuse.svg?color=c977be" alt="GitHub issues" /></a>
<a href="https://github.com/antfu/vueuse" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/antfu/vueuse?style=social"></a>
</p>


<p align="center">
Collection of essential Vue Composition API (inspired by <a href='https://github.com/streamich/react-use' target='__blank'>react-use</a>)
</p>

> 🚧 Working in progress...

## 🚀 Features

- 0 dependencies ⚡ No worry about your bundle size
- Fully tree shakable 🌴 Only take what you want
- Seamless migration 🕶 Use it now! Work for **both** Vue 3.x and 2.x
- Browser compatible 🌐 No need to setup build tools
- Intractive demos 🎪 [Check our Storybook!](https://vueuse.netlify.com)

## 📦 Install

### for Vue 3.x ([vue-next](https://github.com/vuejs/vue-next))

```bash
npm i @vueuse/core@next
```

### for Vue 2.x with [composition-api](https://github.com/vuejs/composition-api) polyfill


```bash
npm i @vue/composition-api
npm i @vueuse/core
```

Please [register the Composition API Plugin](https://github.com/vuejs/composition-api#usage) before other using APIs.

### CDN

```html
<!-- For Vue 3.x -->
<script src="https://unpkg.com/@vueuse/core@next"></script> 

<!-- For Vue 2.x -->
<script src="https://unpkg.com/@vueuse/core"></script>
```

It will be exposed to global variable `window.VueUse`

## ⚡ Functions

You can checkout the documents and live demos in [Storybook](https://vueuse.netlify.com/).

- useCounter
- useIntervalFn
- useStorage
- useStoragePlain
- useNow
- useRaf
- useTimeout
- useTimeoutFn
- useWindowScroll
- useWindowSize

More functions to be added. Please keep turned. (PRs are also welcome!)

## 🔬 Technical Details

### The Versioning

For every release, it will release two version of this package. The `3.x.x` is used for Vue 3.x and the `2.x.x` is used for 2.x. We use the major version number to distinguish the different target version will the minor and patch numbers are shared in both packages.

### Different between 3.x and 2.x

Since the Composition API will be available in 3.x. Using it in 2.x require you use a polyfill. For 3.x build, we use the API from [`@vue/runtime-dom`](https://www.npmjs.com/package/@vue/runtime-dom), and for 2.x, it's [`@vue/composition-api`](https://www.npmjs.com/package/@vue/composition-api)

```js
// 3.x build
import { ref } from '@vue/runtime-dom'

// 2.x build
import { ref } from '@vue/composition-api'
```

<!-- 

## 🧱 Contribute

Thanks for being instrested contributing this project!

// TODO:

--->

## 📄 License

[MIT License](https://github.com/antfu/vueuse/blob/master/LICENSE) © 2019-2020 [Anthony Fu](https://github.com/antfu)
