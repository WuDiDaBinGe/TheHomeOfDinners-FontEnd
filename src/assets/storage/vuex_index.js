import Vue from 'vue'
import Vuex from 'vuex'  //引入vuex

// 使用插件
Vue.use(Vuex);

//创建vuex中的store对象
const store = new Vuex.Store({
  // 三大将
  state:{
    userInfo: {}
  },
  // 修改state的唯一方法：提交mutations
  mutations:{
    getUserInfo(state, user){
      state.userInfo = user;
    }
  },
  //一般异步方法定义在这里面
  actions:{
    getUserInfo(context, user){
        context.commit('getUserInfo', user)
    }
  }
});

export default store;  // 抛出store对象
