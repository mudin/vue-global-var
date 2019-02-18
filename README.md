# vue-global-variable

Binding helpers for Vuex and vue-class-component

[Demo] (https://mudin.github.io/vue-global-variable)

## Dependencies

- [Vue](https://github.com/vuejs/vue)
- [Vuex](https://github.com/vuejs/vuex)

## Installation

```bash
$ npm install --save vue-global-variable
```

## How to use

```js
Vue.use(VueGlobalVariable, {
  globals: {
    user: new User('user1'),
  },
});
```

Now just use `this.$user` is any component or `$user` in its template

## License

MIT
