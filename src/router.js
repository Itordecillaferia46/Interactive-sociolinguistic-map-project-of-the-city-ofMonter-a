import Vue from "vue";
import VueRouter from 'vue-router'

import inicio from './components/inicio'
import principal from './components/principal'
import contenido from './components/contenido'
import creditos from './components/creditos'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio",
      component: inicio
    },
    {
        path: "/principal",
        name: "principal",
        component: principal,

        children:[
            {
            path:'/contenido',
            name:'contenido',
            component: contenido,
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