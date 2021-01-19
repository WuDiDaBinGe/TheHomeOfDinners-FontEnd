import Vue from 'vue';
import VueRouter from 'vue-router';
import form from "vue-resource/src/http/interceptor/form";
import {getLocalStore} from "../assets/storage/localstorage";
import {message} from "ant-design-vue";

Vue.use(VueRouter);

const routes=[
  //主页
  {
    path:'/test',
    component:()=>import("../views/Restaurant_Review_AnalyzeResult")
  },
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
  //搜索结果列表
  {
    path:'searchResults',
    name: 'searchResults',
    component:()=>import("../views/SearchResults"),
  },
  //所有餐馆列表
  {
    path:"/restaurant_list",
    name:"restaurant_list",
    component:()=>import("../views/RestaurantList")
  },
  //某个餐馆页面
  {
    path:'/restaurant',
    name:"restaurant",
    component:()=>import("../views/SingleRestaurant")
  },
  //餐馆页面
  {
    path:'/menu',
    name: "menu",
    component:()=>import("../views/ManageResMenu")
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
    path:"/confirm",
    name:'confirm',
    component:()=>import("../views/Confirm")
  },
  //评论分析结果页面
  {
    path: "/review_analyze",
    name:"review_analyze",
    component:()=>import("../views/Restaurant_Review_AnalyzeResult")
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
// const isLogin = sessionStorage.getItem("sessiontoken");
//   if (isLogin){
//     next();
//   }else{
//     if (to.fullPath == "/Login") {
//       next();
//     }else{
//       next({path: '/Login'})
//     };
//   };

router.beforeEach((to,form,next)=>{
  let isLogin = getLocalStore("userLogin");
  if (isLogin!=null){
    next();
  }else{
    if (to.fullPath === "/userinfo"||to.fullPath.indexOf('/restaurant?id')!==-1) {
      message.error('请先登录！');
      next({path: '/login'});
    }else{
      next();
    }
  }
})


export default router;

