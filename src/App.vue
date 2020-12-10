<template>
  <div id="app">
    <!--
    <router-link to="/index">主页!</router-link>
    <router-link to="/register">注册!</router-link>
    <router-link to="/login">登录!</router-link>
    <router-link to="/new_res">新建餐馆!</router-link>
    <router-link to="/write_reviews">写评论!</router-link>
    <router-link to="/all_restaurant">所有餐馆列表！</router-link>
    -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Login from "./views/Login"
import Register from "./views/Register"
import Index from "./views/index"
import New_Restaurant from "./views/New_Restaurant";

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Login,Register,Index,New_Restaurant
  }
}
</script>


<style scoped>

</style>
