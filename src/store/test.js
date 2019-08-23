import test from '@/api/test'

export default {
  namespaced: true,
  state: {
    info: {}
  },
  getters: {
    info: state => state.info
  },
  mutations: {
    set (state, {info}) {
      state.info = info
    },
    clear (state) {
      state.detail = {}
    }
  },
  actions: {
    load ({commit}) {
      test.findAll(info => {
        commit('set', {info})
      })
    },
    destroy ({commit}) {
      commit('clear')
    }
  }
}
