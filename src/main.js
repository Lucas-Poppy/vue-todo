// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/'
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
import NavigationComponent from '@/views/NavigationComponent'
import TodoComponent from '@/views/TodoComponent'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import icon from 'material-design-icons'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(icon)
Vue.component('TodoComponent', TodoComponent)
Vue.component('NavigationComponent', NavigationComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
