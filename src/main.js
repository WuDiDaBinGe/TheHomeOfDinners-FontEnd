// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import "../static/css/bootstrap.min.css"
import "../static/css/style.css"
import "../static/css/custom.css"
import "../static/css/vendors.css"


import HelloWorld from "./components/HelloWorld"
import Home from "./components/Home"


Vue.config.productionTip = false
Vue.use(VueRouter)

//全局注册组件

// 配置路由
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloword",component:HelloWorld}
  ],
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

//index.html->main.js->app.Vue
