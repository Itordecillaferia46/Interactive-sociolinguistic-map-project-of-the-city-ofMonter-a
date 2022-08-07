import Vue from "vue";
import VueRouter from 'vue-router'

import inicio1 from './components/inicio1'
import principal1 from './components/principal1'
import principal from './components/principal'
import home from './components/home'
import comuna1 from './components/comuna1'
import comuna2 from './components/comuna2'
import comuna3 from './components/comuna3'
import comuna4 from './components/comuna4'
import comuna5 from './components/comuna5'
import comuna6 from './components/comuna6'
import comuna7 from './components/comuna7'
import comuna8 from './components/comuna8'
import comuna9 from './components/comuna9'
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
            path:'/home',
            name:'home',
            component: home,
          },
          {
            path:'comuna1',
            name:'comuna1',
            component: comuna1,
          },
          {
            path:'comuna2',
            name:'comuna2',
            component: comuna2,
          },
          {
            path:'comuna3',
            name:'comuna3',
            component: comuna3,
          },
          {
            path:'comuna4',
            name:'comuna4',
            component: comuna4,
          },
          {
            path:'comuna5',
            name:'comuna5',
            component: comuna5,
          },
          {
            path:'comuna6',
            name:'comuna6',
            component: comuna6,
          },
          {
            path:'comuna7',
            name:'comuna7',
            component: comuna7,
          },
          {
            path:'comuna8',
            name:'comuna8',
            component: comuna8,
          },
          {
            path:'comuna9',
            name:'comuna9',
            component: comuna9,
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