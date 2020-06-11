import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueRouter from "vue-router"
import router from "@/routes"
import App from './App.vue'
import ColorDirective from './directives/color'
import List from "@/components/List"

import store from '@/vuex/store'

Vue.config.productionTip = false

Vue.use(store)
Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.directive('colored', ColorDirective)
Vue.filter('uppercase', value => value.toUpperCase())
Vue.component('app-list', List)
Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  }
})

export const eventEmitter = new Vue()

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
