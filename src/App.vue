<template>
  <div id="app">
    <router-link to="/">主页!</router-link>
    <router-link to="/register">注册!</router-link>
    <router-link to="/login">登录!</router-link>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Login from "./views/Login"
import Register from "./views/Register";
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Login,Register
  }
}
</script>


<style scoped>

</style>
