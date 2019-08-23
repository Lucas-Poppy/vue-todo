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
    push (state, {todo}) {
      state.todoList.push(todo)
    },
    delete (state, {id}) {
      state.todoList.splice(id, 1)
    }
  },
  actions: {
    add ({ commit }, todo) {
      commit('push', { todo })
    },
    delete ({ commit }, id) {
      commit('delete', {id})
    }
  }
}
