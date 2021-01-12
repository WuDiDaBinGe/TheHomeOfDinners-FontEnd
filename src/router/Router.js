import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes=[
  //主页
  {
    path:'/index',
    component:()=>import("../views/index.vue")
  },
  //主页 参数
  {
    path:'/index',
    component:()=>import("../views/index.vue")
  },
  {
    path:'/',
    component:()=>import("../views/index.vue")
  },
  //登录
  {
    path:'/login',
    component:()=>import("../views/Login.vue")
  },
  //注册
  {
    path: '/register',
    component:()=>import("../views/Register.vue")
  },
  //创建餐馆
  {
    path:'/new_res',
    component:()=>import("../views/New_Restaurant")
  },
  //写评论
  {
    path:'/write_reviews',
    name:"write_reviews",
    component:()=>import("../views/WriteReviews")
  },
  //所有餐馆列表
  {
    path:"/restaurant_list",
    name:"restaurant_list",
    component:()=>import("../views/RestaurantList")
  },
  //某个餐馆页面
  {
    path:'/restaurant/',
    name:"restaurant",
    component:()=>import("../views/SingleRestaurant")
  },
  //用户信息
  {
    path:"/userinfo",
    component:()=>import("../views/UserInfoSetting"),
    //嵌套路由
    children:[
      {
        path:"",
        component:()=>import("../components/userInfo_components/UserInfo_form.vue"),
      },
      {
        path:"myreviews",
        component:()=>import("../components/List_Components/Reviews_Cards.vue"),
      },
      {
        path:"myrestaurants",
        component:()=>import("../components/List_Components/restaurant_item.vue")
      }
    ],
  },
  //用户某一条评论页面
  {
    path:"/userdashboard",
    component:()=>import("../views/UserDashboard")
  },
  //博客页面
  {
    path:"/blog",
    component:()=>import("../views/Blog")
  },
  //博客某一篇内容
  {
    path:"/blog_post",
    component:()=>import("../views/Blog_Post")
  },
  //规则页面
  {
    path:"/faq",
    component:()=>import("../views/Faq")
  },
  //确认页面
  {
    path:"/comfirm",
    component:()=>import("../views/Confirm")
  },

  {
    path:"/test_http",
    component:()=>import("../views/testHttp")
  },
  //404
  {
    path:"/*",
    component:()=>import("../views/404")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

//待添加全局路由拦截


export default router;

