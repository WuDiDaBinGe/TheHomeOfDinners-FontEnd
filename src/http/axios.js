import axios from 'axios';
import Vue from '../main'
import {message} from "ant-design-vue";
import response from "vue-resource/src/http/response";
import {getLocalStore} from "../assets/storage/localstorage";
//http://192.168.137.1:8000
//http://192.168.43.41/
//http://192.168.43.103/

//39.96.37.82:8888
axios.defaults.baseURL="http://39.96.37.82:8888";
// 请求拦截
axios.interceptors.request.use(config => {
  // 1. 这个位置就请求前最后的配置
  // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
  // const token = JSON.parse(getLocalStore("userLogin"))['token'];
  //   if (token) {
  //     config.headers.Authorization = token
  //   }
  return config
}, error => {
    return Promise.reject(error)
});

// 响应拦截
axios.interceptors.response.use(response => {
  // 请求成功
  // 1. 根据自己项目需求定制自己的拦截
  // 2. 然后返回数据

  return response;
}, error => {
      // 请求失败
      if (error && error.response) {
        if(error.response.status===400){
          console.log("400错误！");
          // 对400 错误您的处理
          message.warning(error.response.data);
        }
        return Promise.reject(error);
    }
});
