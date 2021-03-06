import Vuex from 'vuex'

const VueGlobalVariable = {
  install(Vue: any, options: any) {

    options = options || {}
    // const store = options.store || {state:{}}
    Vue.use(Vuex)
    const store = new Vuex.Store({state: {}})

    const globals = options.globals || {}

    Object.keys(globals).forEach((key: string) => {
      (window as any)[`${key}`] = globals[key]
      Vue.set(store.state, key, globals[key])
    })

    const computed = {}
    Object.keys(globals).forEach((key) => {
      (computed as any)[`${key}`] = () => globals[key]
    })

    Vue.mixin({
      computed
    })
  }
}

export default VueGlobalVariable
