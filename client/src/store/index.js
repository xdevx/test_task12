import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total_qty:0,
    cart_items:[],
    currencies:[]
  },
  plugins:[createPersistedState()],
  mutations: {
    setTotalQty(state, qty) {
      state.total_qty = qty;
    },
    setFullCart(state, items) {
      state.cart_items = items;
    },
    setCurrencyList(state, currencies) {
      state.currencies = currencies;
    }

  },
  actions: {},
  getters: {}
})
