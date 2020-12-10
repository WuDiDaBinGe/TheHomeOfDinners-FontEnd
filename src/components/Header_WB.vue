<template>
  <header class="header_in">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-12">
					<div id="logo">
						<a href="{% url 'index-mer' %}">
							<img src="/static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky">
						</a>
					</div>
				</div>
				<div class="col-lg-9 col-12">
					<ul id="top_menu">

						<li><a href="{% url 'write-rest' %}" class="btn_top company" >Create Restaurant</a></li>
						<li><a href="{% url 'login' %}" id="sign-in" class="login" title="Sign Out">Sign Out</a></li>
					</ul>
					<!-- /top_menu -->
					<a href="#menu" class="btn_mobile">
						<div class="hamburger hamburger--spin" id="hamburger">
							<div class="hamburger-box">
								<div class="hamburger-inner"></div>
							</div>
						</div>
					</a>
					<nav id="menu" class="main-menu">
						<ul>
							<li><span><a href="{% url 'index-mer' %}">Home</a></span>
							</li>
							<li><span><a href="{% url 'category-companies-listings-filterstop-mer' %}?name=">Reviews</a></span>
							</li>

              <li><span><a href="{% url 'mer-dashboard' %}">User Dashboard</a></span></li>
              <li><span><a href="{% url 'user-settings-mer' %}">User Settings</a></span></li>
							<li><span><a href="#0">About</a></span>
								<ul>
									<li><a href="{% url 'login' %}">Login</a></li>
                  <li><a href="{% url 'register' %}">Register</a></li>

								</ul>
							</li>

							<li class="d-block d-sm-none"><span><a href="#0" class="btn_top">Write a review</a></span></li>
						</ul>
					</nav>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</header>
	<!-- /header -->
</template>

<script>
    export default {
        name: "Header_WB",
        data(){
          return{

          }
        }
    }
</script>

<style scoped>

</style>
