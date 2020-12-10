<template>
  <div id="page">

	<Header_WB></Header_WB>
	<!-- /header -->

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
								<li>
									<strong>3</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Reviews written by you"><i class="icon_star"></i> Reviews</a>
								</li>
								<li>
									<strong>12</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Number of people who have read your reviews"><i class="icon-user-1"></i> Reads</a>
								</li>
								<li>
									<strong>36</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Number of people who found your review useful"><i class="icon_like_alt"></i> Useful</a>
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
					<div class="settings_panel">
					    <h3>Personal settings</h3>
					    <hr>
            <input name="id" id="id" value="User_data.4" style="display: none">
            <input name="cho" id="cho" value="0" style="display: none">

						<div class="form-group">
							<label>Edit Profile text</label>
							<textarea class="form-control"  style="height: 180px;" placeholder="">{{user.name}}</textarea>
						</div>
						<div class="form-group">
							<label>Edit Photo</label>
							<div class="fileupload"><input type="file"  accept="image/*"></div>
						</div>
						<div class="form-group">
							<label>Edit Email</label>
							<input class="form-control" type="email"  :value="user.email">
						</div>
            <div class="form-group">
							<label>Edit name</label>
							<input class="form-control" type="text"  :value="user.name">
						</div>
						<div class="form-group">
							<label>Edit Full name</label>
							<input class="form-control" type="text"  :value="user.name">
						</div>
						<div class="form-group">
							<label>Edit City</label>
							<input class="form-control" type="text"  :value="user.city">
						</div>
						<div class="form-group">
							<label>Edit Country</label>
							<input class="form-control" type="text"  :value="user.country">
						</div>
						<p class="text-right"><a class="btn_1 small add_top_15" href="#0" onclick="document.getElementById('cho').value='0';document.getElementById('changeuser').submit();">Save personal info</a></p>
					</div>
					<!-- /settings_panel -->
					<div class="settings_panel">
					    <h3>Change password</h3>
					    <hr>
						<div class="form-group">
							<label>Current Password</label>
							<input class="form-control" type="password" id="password" name="password">
						</div>
						<div class="form-group">
							<label>New Password</label>
							<input class="form-control" type="password" id="password1" name="password1">
						</div>
						<div class="form-group">
							<label>Confirm Password</label>
							<input class="form-control" type="password" id="password2" name="password2">
						</div>
						<div id="pass-info" class="clearfix"></div>
						<p class="text-right"><a class="btn_1 small" href="#0" onclick="document.getElementById('cho').value='1';document.getElementById('changeuser').submit();">Save password</a></p>
					</div>
					<!-- /settings_panel -->
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
        }
    }
</script>

<style scoped>

</style>
