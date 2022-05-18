import Vue from "vue";
import VueRouter from 'vue-router'

import inicio1 from './components/inicio1'
import principal1 from './components/principal1'
import home from './components/home'
import m1 from './components/m1' 
import creditos from './components/creditos'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio1",
      component: inicio1
    },
    {
        path: "/principal1",
        name: "principal1",
        component: principal1,

        children:[
            {
            path:'/home',
            name:'home',
            component: home,
          },
          {
            path:'/m1',
            name:'m1',
            component: m1,
          }, 
          {
            path:'/creditos',
            name:'creditos',
            component: creditos,
          },
        ]
          },
      ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;