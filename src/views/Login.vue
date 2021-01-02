<template>
  <div id="login_bg">
    <div id="login" style="position :relative ;">
      <aside >
        <figure>
          <router-link to="/index"><img src="../../static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></router-link>
        </figure>
        <form action="/login" method="post">
          <div class="divider"><span>Login</span></div>
          <div class="form-group">
            <input class="form-control" id="name" type="text" placeholder="Name" name="username" v-model="peopleInfo.username">
            <i class="ti-user"></i>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" v-model="peopleInfo.password">
            <i class="icon_lock_alt"></i>
          </div>
          <div class="form-group">
            <select class="form-control" name="usertype" style="padding: 0 10%;" v-model="peopleInfo.role">
              <option value="1">用户</option>
              <option value="2">商家</option>
              <option value="3">管理员</option>
            </select>
            <i class="ti-user"></i>
          </div>
          <div class="clearfix add_bottom_30">
            <div class="checkboxes float-left">

            </div>
          </div>
          <div id="pass-info" v-bind:class="classlo"></div>
          <input type="button" id="losu" class="btn_1 rounded full-width" value="登录食客之家" @click="userLogin">
          <div class="text-center add_top_10">
            新用户/商家?
            <strong><router-link to="/register">注册!</router-link></strong>
          </div>
        </form>
        <CopyRight></CopyRight>
      </aside>
    </div>
  </div>
</template>

<script>
    import CopyRight from "../components/CopyRight";
    import {setLocalStore} from "../assets/storage/localstorage";
    export default {
      name: "Login",
      components: {CopyRight},
      data(){
          return{
            classlo:"",
            peopleInfo:{
                username:"",
                password:"",
                role:'',
            },
            post_user:{
              username:"",
              password:"",
            }
          }
      },
      methods:{
        userLogin(){
          var usrname=this.peopleInfo.username;
          var password=this.peopleInfo.password;
          var role=this.peopleInfo.role;

          this.post_user.username=role+usrname;
          this.post_user.password=password;
          this.$httpM.post(this.$api.User.login,this.post_user,false)
          .then(response=>{
            alert("成功！");
            console.log(response.data);
            //设置localstorage
            setLocalStore("userLogin",response.data);
            //设置vuex
            this.$store.commit('getUserInfo',response.data);
            //跳转到首页
            this.$router.push({path:'/index'});

          })
          .catch(err =>{
            alert("出现错误！");
            console.log(err);
          })
        }
      }
    }
</script>

<style scoped>

</style>
