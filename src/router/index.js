import Vue from 'vue'
import Router from 'vue-router'
import AllListComponent from '@/views/TodoComponents/AllListComponent'
import DoingListComponent from '@/views/TodoComponents/DoingListComponent'
import DoneListComponent from '@/views/TodoComponents/DoneListComponent'
import CalenderComponent from '@/views/TodoComponents/CalenderComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'AllListComponent',
      component: AllListComponent
    },
    {
      path: '/doing',
      name: 'DoingListComponent',
      component: DoingListComponent
    },
    {
      path: '/done',
      name: 'DoneListComponent',
      component: DoneListComponent
    },
    {
      path: '/calender',
      name: 'CalenderComponent',
      component: CalenderComponent
    }
  ]
})
