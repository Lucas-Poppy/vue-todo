const DONE_STATUS = 'done'
const DOING_STATUS = 'doing'

export default {
  namespaced: true,
  state: {
    todoList: [],
    count: 1
  },
  getters: {
    allList: state => state.todoList,
    doneList: state => state.todoList.filter(el => el.status === DONE_STATUS),
    doingList: state => state.todoList.filter(el => el.status === DOING_STATUS)
  },
  mutations: {
    push (state, {todo}) {
      todo.id = state.count++
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
    edit (state, {id, title, date}) {
      const item = state.todoList.find(el => el.id === id)
      item.title = title
      item.date = date
    }
  },
  actions: {
    add ({ commit }, todo) {
      commit('push', { todo })
    },
    delete ({ commit }, id) {
      commit('delete', {id})
    },
    done ({ commit }, id) {
      commit('done', {id})
    },
    doing ({ commit }, id) {
      commit('doing', {id})
    },
    edit ({ commit }, item) {
      commit('edit', {id: item.id, title: item.title, date: item.date})
    }
  }
}
