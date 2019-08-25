import Vue from 'vue'
import Vuex from 'vuex'
import todoList from '@/store/todoList'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    todoList: todoList
  }
})
