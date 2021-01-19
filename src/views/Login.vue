<template>
  <div id="login_bg">
    <div id="login" style="position :relative ;">
      <aside >
        <figure>
          <router-link to="/index"><img src="../../static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></router-link>
        </figure>
        <form action="/login" method="post">
          <div class="divider"><span>登录</span></div>
          <div class="form-group">
            <input class="form-control" id="name" type="text" placeholder="吃货的用户名" name="username" v-model="peopleInfo.username" @blur="checkUsername">
            <i class="ti-user"></i>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" id="password" value="" placeholder="偷偷地输入密码" v-model="peopleInfo.password" @blur="checkPassWord">
            <i class="icon_lock_alt"></i>
          </div>
          <div class="form-group">
            <select class="form-control" name="usertype" style="padding: 0 10%;" v-model="peopleInfo.role" @change="checkRole">
              <option value="0">请选择角色</option>
              <option value="1">用户</option>
              <option value="2">商家</option>
            </select>
            <i class="ti-user"></i>
          </div>
          <div class="clearfix add_bottom_30">
            <div class="checkboxes float-left">

            </div>
          </div>
          <div id="pass-info" v-bind:class="classlo" v-show="!canLoginFlag">{{errinfo}}</div>
          <input type="button" id="losu" class="btn_1 rounded full-width" value="登录食客之家" @click="userLogin">
          <div class="text-center add_top_10">
            新吃货/商家?
            <strong><router-link to="/register">快加入大家庭吧!</router-link></strong>
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
            errinfo:"",
            peopleInfo:{
                username:"",
                password:"",
                role:0,
            },
            nameFlag:false,
            passFlag:false,
            roleFlag:false,
            postResponse:false,
          }
      },
      computed:{
          canLoginFlag(){
            return this.nameFlag&&this.passFlag&&this.roleFlag;
          }
      },
      methods:{
        //检查用户名
        checkUsername(){
          let name=this.peopleInfo.username;
          let tmpThis=this;
          if (name.length<5||name.length>20){
            this.errinfo="用户名应为5-20字符之间";
            this.classlo="weakPass";
          }
          else {
            this.$httpM.get(this.$api.User.userNameCount,{params:{'username':this.peopleInfo.username}})
            .then(function (response) {
              console.log(response);
              if (response.data['count']===0){
                tmpThis.errinfo="用户名不存在！";
                tmpThis.classlo="weakPass";
              }
              else {
                tmpThis.errinfo="";
                tmpThis.classlo="";
                tmpThis.nameFlag=true;
              }
            })
            .catch(function (err) {

            })
          }
        },
        //检查密码
        checkPassWord(){
          let pwd=this.peopleInfo.password;
          if(pwd.length<5||pwd.length>20){
              this.errinfo="密码应为5-20字符之间";
              this.classlo="weakPass";
          }else {
            this.errinfo="";
            this.classlo="";
            this.passFlag=true;
          }
        },
        //检查角色
        checkRole(){
          console.log(this.peopleInfo.role);
          if (this.peopleInfo.role==='0'){
              this.errinfo="请输入用户角色";
              this.classlo="weakPass";
          }
          else if (this.peopleInfo.role in [1,2,3]){
              this.errinfo="";
              this.classlo="";
              this.roleFlag=true;
          }
        },
        userLogin(){
          console.log(this.nameFlag,this.passFlag,this.roleFlag);
          //表单验证不通过
          if (!this.canLoginFlag){
              this.errinfo="请正确填写登录名、密码、角色信息";
              this.classlo="weakPass";
              return ;
          }
          let tmpThis=this;
          this.$httpM.post(this.$api.User.login,this.peopleInfo,false)
          .then(function (response){
            if (response.status===200){
              tmpThis.$message.success("成功！");
              console.log("成功response:");
              console.log(response);
              //设置localstorage
              setLocalStore("userLogin",response.data);
              //设置vuex
              tmpThis.$store.commit('getUserInfo',response.data);
              //跳转到首页
              tmpThis.$router.push({path:'/index'});
            }
          })
          .catch(function (err) {
            if (err.response){
              if (err.response.status===510){
                tmpThis.errinfo=err.response.data;
                tmpThis.classlo="weakPass";
                tmpThis.roleFlag=false;
              }
              else if (err.response.status===509){
                tmpThis.errinfo="密码错误！";
                tmpThis.classlo="weakPass";
                tmpThis.passFlag=false;
              }
            }else if (err.request){
              console.log(err.request);
            } else {
              console.log('Error',err.message);
            }
            //console.log(err.config);
          })

        }
      }
    }
</script>

<style scoped>

</style>
