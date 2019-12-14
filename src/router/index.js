import Vue from 'vue'
import Router from 'vue-router'
 
// pages
import TheBase from '../components/TheBase'
import TheUpload from '../components/TheUpload.vue'
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'thebase',
      component: TheBase
    },
    {
      path: '/upload',
      name: 'upload',
      component: TheUpload
    }
  ]
})