import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import clipboard from 'vue-clipboard2'

import { Row, Col, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui';

Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

Vue.use(clipboard)

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
