import todoList from '@/api/todoList.js'
const DONE_STATUS = 'done'
const DOING_STATUS = 'doing'

export default {
  namespaced: true,
  state: {
    todoList: [],
    loading: false
  },
  getters: {
    allList: state => state.todoList,
    doneList: state => state.todoList.filter(el => el.status === DONE_STATUS),
    doingList: state => state.todoList.filter(el => el.status === DOING_STATUS)
  },
  mutations: {
    push (state, todo) {
      state.todoList.push(todo)
      state.loading = false
    },
    delete (state, { id }) {
      const index = state.todoList.findIndex(el => el.id === id)
      state.todoList.splice(index, 1)
      state.loading = false
    },
    done (state, { id }) {
      const item = state.todoList.find(el => el.id === id)
      item.status = DONE_STATUS
      state.loading = false
    },
    doing (state, { id }) {
      const item = state.todoList.find(el => el.id === id)
      item.status = DOING_STATUS
      state.loading = false
    },
    edit (state, todo) {
      const item = state.todoList.find(el => el.id === todo.id)
      item.title = todo.title
      item.date = todo.date
      state.loading = false
    },
    load (state, todoList) {
      state.todoList = todoList
      state.loading = false
    },
    loading (state) {
      state.loading = true
    }
  },
  actions: {
    async add ({ commit }, todo) {
      commit('loading')
      const res = await todoList.store(todo)
      commit('push', res)
    },
    async delete ({ commit }, id) {
      commit('loading')
      const res = await todoList.destroy(id)
      if (res.status) {
        commit('delete', { id })
      }
    },
    async done ({ commit }, id) {
      commit('loading')
      const res = await todoList.done(id)
      if (res.status) {
        commit('done', { id })
      }
    },
    async doing ({ commit }, id) {
      commit('loading')
      const res = await todoList.doing(id)
      if (res.status) {
        commit('doing', { id })
      }
    },
    async edit ({ commit }, todo) {
      commit('loading')
      const res = await todoList.update(todo)
      if (res.status) {
        commit('edit', todo)
      }
    },
    async load ({ commit }) {
      commit('loading')
      const lists = await todoList.list()
      commit('load', lists)
    }
  }
}
