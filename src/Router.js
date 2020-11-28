import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes=[
  {
    path:'/',
    component:()=>import("./views/index.vue")
  },
  {
    path:'/login',
    component:()=>import("./views/Login.vue")
  },
  {
    path: '/register',
    component:()=>import("./views/Register.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

