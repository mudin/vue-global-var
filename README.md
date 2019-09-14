<p align="center">
  <a href="https://github.com/mudin/vue-global-var/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mudin/vue-global-var.svg" alt="License">
  </a>
  <a href="https://badge.fury.io/js/vue-global-var">
    <img src="https://badge.fury.io/js/vue-global-var.svg" alt="npm version">
  </a>
  <a href="http://hits.dwyl.io/mudin/vue-global-var">
    <img src="http://hits.dwyl.io/mudin/vue-global-var.svg" alt="HitCount">
  </a>
  <a href="https://unpkg.com/vue-global-var@latest/dist/vue-global-var.cjs.js">
    <img src="https://img.badgesize.io/mudin/vue-global-var/master/dist/vue-global-var.cjs.js?compression=gzip" alt="size">
  </a>
</p>

# vue-global-var

Reactive global variable can be sharable between components

[Demo](https://mudin.github.io/vue-global-var-demo/)

## Dependencies

- [Vue](https://github.com/vuejs/vue)
- [Vuex](https://github.com/vuejs/vuex)

## Installation

```bash
$ npm install --save vue-global-var
```

## How to use

```js
Vue.use(VueGlobalVar, {
  globals: {
    $user: new User('user1'),
    obj:{},
    config:Config,
    ....
  },
});
```

Now just use `this.$user` is any component or `$user` in its template

## License

MIT
