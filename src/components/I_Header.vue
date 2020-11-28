<template>
<header class="header menu_fixed">
		<div id="logo">
			<a href="{% url 'index' %}">
				<img src="/static/img/logo.svg" width="140" height="35" alt="" class="logo_normal">
				<img src="/static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky">
			</a>
		</div>
		<ul id="top_menu">
			<li><a href="{% url 'login' %}" class="btn_top">Write a Review</a></li>
			<li><a href="{% url 'login' %}" class="btn_top company" >Create Restaurant</a></li>
			<li><a href="{% url 'login' %}" id="sign-in" class="login" title="Sign In">Sign In</a></li>
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
				<li><span><a href="{% url 'index' %}">Home</a></span>
				</li>
				<li><span><a href="#0">Reviews</a></span>
					<ul>

						<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=">Reviews page</a></li>
						<li><a href="{% url 'login' %}">Write a review</a></li>
					</ul>
				</li>
				<li><span><a href="{% url 'login' %}">User Dashboard</a></span></li>
                <li><span><a href="{% url 'login' %}">User Settings</a> </span></li>
				<li><span><a href="#0">About</a></span>
					<ul>
                        <li><a href="{% url 'login' %}">Login</a></li>
						<li><a href="{% url 'register' %}">Register</a></li>
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
