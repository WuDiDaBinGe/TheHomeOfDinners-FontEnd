<template>
<header class="header menu_fixed">
		<div id="logo">
			<router-link to="/index">
				<img src="/static/img/logo.svg" width="140" height="35" alt="" class="logo_normal">
				<img src="/static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky">
			</router-link>
		</div>
		<ul id="top_menu">
			<li><router-link to="/write_reviews" class="btn_top">Write a Review</router-link></li>
			<li><router-link to="/new_res" class="btn_top company" >Create Restaurant</router-link></li>
		
		</ul>
		<!-- /top_menu -->
		<a href="#menu" class="btn_mobile">
			<div class="hamburger hamburger--spin" id="hamburger">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<!-- /btn_mobile -->
		<nav id="menu" class="main-menu">
			<ul>
				<li><span><router-link to="/index">主页</router-link></span>
				</li>
				<li><span><a href="#0">Reviews</a></span>
					<ul>
						<li><router-link to="">Reviews page</router-link></li>
						<li><router-link to="/write_reviews">Write a review</router-link></li>
					</ul>
				</li>
				<li><span><a href="{% url 'login' %}">User Dashboard</a></span></li>
        		<li><span><router-link to="/userinfo">User Settings</router-link></span></li>
				<li><span><a href="#0">About</a></span>
					<ul>
            			<li><router-link to="/login">登录</router-link></li>
						<li><router-link to="/register">注册</router-link></li>
					</ul>
				</li>

				<li class="d-block d-sm-none"><span><a href="#0" class="btn_top">Write a review</a></span></li>
			</ul>
		</nav>
	</header>
	<!-- /header -->
</template>

<script>
    export default {
        name: "I_Header"
    }
</script>

<style scoped>

</style>
