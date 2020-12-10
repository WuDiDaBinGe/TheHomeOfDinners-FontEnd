<template>
    <div>
      <button  class="btn-light" @click="Minepost">post方法</button>
      <button class="btn-primary" @click="Mineget">get方法</button>
      <button class="btn-dark">delete方法</button>
    </div>
</template>

<script>
    export default {
        name: "testHttp",
        data(){
          return{
            post_data:[{
                        username:yxb,
                        password:123456789,
                        password2:123456789,
                        mobile:15180450364,
                        sms_code:512698,
                        role:1,
                        allow:true,
                        }]
          }
        },
        methods:{
          Minepost(){
            this.$httpM.post(this.$api.Test.test_post,this.post_data,false)
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (err) {
                  console.log(err);
              })
          },
          Mineget(){
            this.$httpM.get(this.$api.Test.test_get
              ,{params:{id:1}},false)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
          },
        }
    }
</script>

<style scoped>

</style>
