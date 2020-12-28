// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from "vue-router";
import router from "./Router.js";
import "bootstrap";
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

//全局工具类
import {Nrange} from './utils/utils';


//全局注册
Vue.prototype.$api=api;
Vue.prototype.$httpM=http;

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.prototype.setStore = setLocalStore
Vue.prototype.getStore = getLocalStore
Vue.prototype.removeStore = removeLocalStore


//全局注册组件


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
  store:store,
});

//index.html->main.js->app.Vue
