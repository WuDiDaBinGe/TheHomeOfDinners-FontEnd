<template>
    <div class="users">
      <h1>Users里面的标签</h1>
      <ul>
        <li v-for="item in users">{{item}}</li>
      </ul>
    </div>
</template>
<!--
  传值：string number boolean
  引用：array，object
-->
<script>
    export default {
        name: "users",
        props:{
          users:{
            type:Array,
            required:true
          }
        },
        data(){

        },

    }
</script>

<style scoped>

</style>
