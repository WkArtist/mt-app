import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/assets/css/main.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
  bind (el, bindings, vnode) {
    document.addEventListener('click', bindings.value, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
