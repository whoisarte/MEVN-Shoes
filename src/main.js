// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSwal from 'vue-swal'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VueSwal)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md'
    }
  }),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
