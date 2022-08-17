import Vue from "vue";
import VueRouter from 'vue-router'

import inicio1 from './components/inicio1'
import principal1 from './components/principal1'
import principal from './components/principal'
import m1 from './components/m1' 
import creditos from './components/creditos'
import formulario from './components/crud/formulario'
import menu from './components/crud/menu'
import editar from './components/crud/editar'
import tabla from './components/crud/tabla'

    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio1",
      component: inicio1
    },
    {
      path: "/principal",
      name: "principal",
      component: principal,
    },
    {
        path: "/principal1",
        name: "principal1",
        component: principal1,
        children:[
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
    {
      path: "/formulario",
      name: "formulario",
      component: formulario
    },
    {
      path: "/menu",
      name: "menu",
      component: menu
    },
    {
      path: "/editar",
      name: "editar",
      component: editar
    },
    {
      path: "/tabla",
      name: "tabla",
      component: tabla
    }
      ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;