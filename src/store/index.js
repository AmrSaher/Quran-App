import { createStore } from 'vuex';

export default createStore({
  state: {
    showMenu: false
  },
  getters: {
    showMenu(state) {
      return state.showMenu;
    }
  },
  mutations: {
    showMenu(state, value) {
      state.showMenu = value;
    }
  },
  actions: {
  },
  modules: {
  }
});
