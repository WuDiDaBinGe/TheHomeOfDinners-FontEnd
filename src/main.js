// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from "vue-router";
import router from "./router/Router.js";
import "bootstrap";
import Antd from "ant-design-vue";
import {message,Modal} from "ant-design-vue";
import 'ant-design-vue/dist/antd.css'
//引入全局样式
import "./assets/bootstrap-4.5.0-dist/css/bootstrap.min.css"
import "../static/css/style.css";
import "../static/css/custom.css";
import "../static/css/vendors.css";


//引入全局JS
//localstorage
import { setLocalStore, getLocalStore, removeLocalStore } from './assets/storage/localstorage'
// vuex store引入
import store from './assets/storage/vuex_index'
//服务器接口
import api from './http/api'
//请求方法
import http from './http/http'
//axios拦截器
import './http/axios'
Vue.component(Modal.name, Modal);
//全局工具类

//全局注册
Vue.prototype.$api=api;
Vue.prototype.$httpM=http;

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.setStore = setLocalStore;
Vue.prototype.getStore = getLocalStore;
Vue.prototype.removeStore = removeLocalStore;

Vue.prototype.$message = message;
message.config({
    //duration: 2,    // 持续时间
    top:`100px`,      // 到页面顶部距离
    maxCount: 3       // 最大显示数, 超过限制时，最早的消息会被自动关闭
});


//全局注册组件
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
  store:store,
});
export default Vue;
//index.html->main.js->app.Vue
