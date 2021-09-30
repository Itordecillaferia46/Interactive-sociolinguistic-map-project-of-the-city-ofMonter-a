import Vue from "vue";
import VueRouter from 'vue-router'

import inicio from './components/inicio'
import principal1 from './components/principal1'
import contenido from './components/contenido'
import m1 from './components/m1' 
import creditos from './components/creditos'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio",
      component: inicio
    },
    {
        path: "/principal1",
        name: "principal1",
        component: principal1,

        children:[
            {
            path:'/contenido',
            name:'contenido',
            component: contenido,
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