import todoList from '@/api/todoList.js'
const DONE_STATUS = 'done'
const DOING_STATUS = 'doing'

export default {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    allList: state => state.todoList,
    doneList: state => state.todoList.filter(el => el.status === DONE_STATUS),
    doingList: state => state.todoList.filter(el => el.status === DOING_STATUS)
  },
  mutations: {
    push (state, todo) {
      state.todoList.push(todo)
    },
    delete (state, {id}) {
      const index = state.todoList.findIndex(el => el.id === id)
      state.todoList.splice(index, 1)
    },
    done (state, {id}) {
      const item = state.todoList.find(el => el.id === id)
      item.status = DONE_STATUS
    },
    doing (state, {id}) {
      const item = state.todoList.find(el => el.id === id)
      item.status = DOING_STATUS
    },
    edit (state, todo) {
      const item = state.todoList.find(el => el.id === todo.id)
      item.title = todo.title
      item.date = todo.date
    },
    load (state, todoList) {
      state.todoList = todoList
    }
  },
  actions: {
    async add ({ commit }, todo) {
      const res = await todoList.store(todo)
      commit('push', res)
    },
    async delete ({ commit }, id) {
      const res = await todoList.destroy(id)
      if (res.status) {
        commit('delete', {id})
      }
    },
    async done ({ commit }, id) {
      const res = await todoList.done(id)
      if (res.status) {
        commit('done', {id})
      }
    },
    async doing ({ commit }, id) {
      const res = await todoList.doing(id)
      if (res.status) {
        commit('doing', {id})
      }
    },
    async edit ({ commit }, todo) {
      const res = await todoList.update(todo)
      if (res.status) {
        commit('edit', todo)
      }
    },
    async load ({ commit }) {
      const lists = await todoList.list()
      commit('load', lists)
    }
  }
}
