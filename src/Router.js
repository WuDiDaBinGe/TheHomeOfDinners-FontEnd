import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes=[
  {
    path:'/index',
    component:()=>import("./views/index.vue")
  },
  {
    path:'/login',
    component:()=>import("./views/Login.vue")
  },
  {
    path: '/register',
    component:()=>import("./views/Register.vue")
  },
  {
    path:'/new_res',
    component:()=>import("./views/New_Restaurant")
  },
  {
    path:'/write_reviews',
    component:()=>import("./views/WriteReviews")
  },
  {
    path:"/all_restaurant",
    component:()=>import("./views/RestaurantList")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

