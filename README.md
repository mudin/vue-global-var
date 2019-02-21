# vue-global-variable

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
Vue.use(VueGlobalVariable, {
  globals: {
    user: new User('user1'),
    obj:{},
    config:Config,
    ....
  },
});
```

Now just use `this.$user` is any component or `$user` in its template

## License

MIT
