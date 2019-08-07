import { Module } from 'vuex'

class AppState {

}

const app: Module<AppState, any> = {
  namespaced: true,
  state: new AppState(),
  mutations: {},
  getters: {},
  actions: {}
}

export default app
