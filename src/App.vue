<template>
  <div id="app">

    <Register></Register>
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
