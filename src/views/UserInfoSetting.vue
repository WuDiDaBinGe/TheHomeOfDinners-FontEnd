<template>
  <div id="page">

	<Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="user_summary">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<figure>
								<img :src=user.pic_src alt="">
							</figure>
							<h1>{{user.name}}</h1>
							<span>{{user.city}}</span>
						</div>
						<div class="col-md-6">
							<ul>
								<li @click="getMyReviews">
									<strong>3</strong>
									<a><i class="icon_star"></i> Reviews</a>
								</li>
								<li @click="getMyinfo">
									<strong>12</strong>
									<a><i class="icon-user-1"></i> Reads</a>
								</li>
								<li @click="getMyRes">
									<strong>36</strong>
									<a><i class="icon_like_alt"></i> Useful</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- /container -->
			</div>
		</div>
		<!-- /user_summary -->
		<form autocomplete="off" action="/changeuser" method="post" id="changeuser" enctype="multipart/form-data">

		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
					<router-view></router-view>
				</div>
				<!-- /col -->
				<div class="col-lg-4" id="sidebar">
					<div class="box_general">
						<h5>Delete account</h5>
						<p>delete and exit system</p>
						<a href="#" class="btn_1 small" onclick="document.getElementById('cho').value='2';document.getElementById('changeuser').submit();">Delete account</a>
					</div>
				</div>
			</div>
			<!-- /row -->
		</div>
        </form>
		<!-- /container -->
		
		
	</main>
	<!--/main-->

	<Footer_com></Footer_com>
	<!--/footer-->
	</div>
	<!-- page -->
</template>

<script>
    import Footer_com from "../components/Footer_com";
    import Header_WB from "../components/Header_WB";
    export default {
        name: "UserInfoSetting",
		components: {Header_WB, Footer_com},
		data(){
			return{
				user:{
					name:"yuxiubin",
					pic_src:"https://bkimg.cdn.bcebos.com/pic/5243fbf2b21193134c87adbe67380cd790238dfc?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
					profile:"",
					email:"1151680016@qq.com",
					city:"湖南长沙",
					country:"",
					password:"",
					new_password:"",
					comfir_password:"",
					reviews_num:"",
					reads_num:"",
					userfule_num:"",
				}

			}
		},
		methods:{
			getMyReviews(){
				this.$router.push("/userinfo/myreviews");
			},
			getMyRes(){
				this.$router.push("/userinfo/myrestaurants");
			},
			getMyinfo(){
				this.$router.push("/userinfo");
			}
		}
        
    }
</script>

<style scoped>

</style>
