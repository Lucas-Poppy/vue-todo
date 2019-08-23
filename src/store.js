import Vue from 'vue'
import Vuex from 'vuex'
import test from '@/store/test'
import todoList from '@/store/todoList'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    test: test,
    todoList: todoList
  }
})
