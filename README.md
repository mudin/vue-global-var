# vue-global-variable

Reactive global variable can be sharable between components

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
  // store,
  globals: {
    user: new User('user1'),
  },
});
```

Now just use `this.$user` is any component or `$user` in its template

## License

MIT
