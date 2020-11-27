<template>
  <div id="home">
    <h1>{{msg}}</h1>
    <users v-bind:users="user_names"></users>
  </div>
</template>
<script>

import Users from "./Users";

export default {
  name: 'home',
  data(){
    return {
      msg:"yxbzuishuai",
      user_names:["yuxiub","wangyan","zahngyanqiang "]
    }
  },
  components: {
    "users":Users
  }
}
</script>

<style scoped>

  h1{
    color: purple;
  }
</style>
