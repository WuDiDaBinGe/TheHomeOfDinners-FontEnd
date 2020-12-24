import axios from 'axios';
//http://192.168.137.1:8000
axios.defaults.baseURL="https://jsonplaceholder.typicode.com/";

// 请求拦截
axios.interceptors.request.use(config => {
  // 1. 这个位置就请求前最后的配置
  // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
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
            switch (error.response.status) {
                case 400:
                    console.log("404错误！");
                    // 对400 错误您的处理
                break;
                case 401:
                    console.log("401错误！");
                    // 对 401 错误进行处理
                break;
                default:
                  console.log("其他错误！");
                  // 如果以上都不是的处理
                return Promise.reject(error);
          }
    }
});
