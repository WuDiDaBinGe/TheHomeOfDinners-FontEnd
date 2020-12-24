<template>
<header class="header menu_fixed">
		<div id="logo">
			<router-link to="/index">
				<img src="/static/img/logo.svg" width="140" height="35" alt="" class="logo_normal">
				<img src="/static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky">
			</router-link>
		</div>
		<!-- /btn_mobile -->
		<nav id="menu" class="main-menu">
			<ul>
				<li v-show="!is_login"><span><router-link to="/login" >登录账号</router-link> </span>
				</li>
				<li v-show="!is_login"><span><router-link to="/register" >注册账号</router-link> </span>
				</li>

				<li><span><a href="#0">个人中心</a></span>
					<ul>
						<li><router-link to="">我的评价</router-link></li>
						<li><router-link to="">我的收藏</router-link></li>
						<li><router-link to="">我的设置</router-link></li>
					</ul>
				</li>
        		<li><span><a href="#0">商户服务</a></span>
					<ul>
            <li><router-link to="/new_res">创建餐馆</router-link></li>
						<li><router-link to="">商户中心</router-link></li>
					</ul>
				</li>
				<li><span><a href="#0">帮助中心</a></span>
					<ul>
            <li><router-link to="/">平台规则</router-link></li>
						<li><router-link to="/">联系客服</router-link></li>
						<li><router-link to="/register">注册</router-link></li>
						<li><router-link to="/login">登录</router-link></li>
					</ul>
				</li>
        <li v-show="is_login"><span><a>欢迎：{{username}}</a> </span>
					<ul>
						<li><router-link to="">个人设置</router-link></li>
						<li @click="loginOut"><a>退出</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</header>
	<!-- /header -->
</template>

<script>
    export default {
		name: "I_Header",
      data(){
        return{
          is_login:false,
          username:"",
        }
      },
      mounted() {
        var user=this.$store.state.userInfo;
        console.log(user);
        //用户已经登录
        if(user.id!=null){
          this.is_login=true;
          this.username=user.username;
        }
      },
      methods:{
		    loginOut(){
          this.is_login=false;
        }
      },

    }
</script>

<style scoped>

</style>
