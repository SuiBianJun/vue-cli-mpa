import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),// render会覆盖绑定的盒子标签
}).$mount('#app')
