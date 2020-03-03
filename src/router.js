import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Home from './views/Search.vue';
import About from './views/About.vue';


Vue.use(Router);
Vue.use(VueAxios, axios);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],


});
