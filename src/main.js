import Vue from 'vue'
import App from './Form.vue'
import VueMask from 'v-mask'
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#form')


