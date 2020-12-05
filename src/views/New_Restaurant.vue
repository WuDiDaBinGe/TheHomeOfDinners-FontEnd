<template>
  <div id="page">

  <Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="container margin_60_35">
      <form autocomplete="off" action="/writerest" method="post" enctype="multipart/form-data">
                
			<div class="row">
				<div class="col-lg-8">
					<div class="box_general write_review">
						<h1>Create your restaurant!</h1>
						<div class="rating_submit">
							<div class="form-group">

							</div>
						</div>
						<!-- /rating_submit -->
						<div class="form-group">
							<label>Name of your restaurant</label>
							<input class="form-control" type="text" name="name" id="name" placeholder="">
						</div>
						<div class="form-group">
							<label>Menu</label>
							<textarea class="form-control" style="height: 180px;" name="food" id="food" placeholder="Write your menu to introduce your business"></textarea>
						</div>
                        <div class="form-group">
							<label>Address</label>
							<input class="form-control" type="text" name="address" id="address" placeholder="Where is your restaurant?">
						</div>
						<div class="form-group">
							<label>Add your photo (optional)</label>
							<div class="fileupload"><input type="file" name="fileupload" id="photo" accept="image/*"></div>
						</div>
						<div class="form-group">
						</div>
                        <div id="pass-info" class="clearfix"></div>
						<input type="submit" class="btn_1" id="subrest" value="Submit restaurant"></a>
					</div>
				</div>
				<!-- /col -->
				<div class="col-lg-4">
					<div class="latest_review">
						<h4>Recent reviews</h4>
						<div class="review_listing">
							<div class="clearfix add_bottom_10">
								<figure><img src="https://cc.ddcdn.com/img2/daodao/site/no_user_photo_daodao.gif" alt=""></figure>
								<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
								<small>Shops</small>
							</div>
							<h3><strong>Tripadvisor会员</strong></h3>
							<h4>"Kind people, brilliant food!"</h4>
							<p>We’ve visited this place today. The food is brilliant! Just how I remember it from my trip to Chinatown. Rich with flavor and served with a big smile.We’ve described a dish we’ve eaten in Chinatown and they knew right away what we’ve mentioned.</p>
							<ul class="clearfix">
								<li><small>昨天点评</small></li>
								<li><a href="{% url 'category-companies-listings-filterstop-mer' %}?name=" class="btn_1 small">Read other reviews</a></li>
							</ul>
						</div>
						<!-- /review_listing -->
						<div class="review_listing">
							<div class="clearfix add_bottom_10">
								<figure><img src="https://ccm.ddcdn.com/ext/photo-s/01/2e/70/78/avatar059.jpg" alt=""></figure>
								<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
								<small>Shops</small>
							</div>
							<h3><strong>robrF6679UV</strong></h3>
							<h4>"Date night"</h4>
							<p>The food was delicious and me and my friend really enjoyed it. Hopefully we will be back soon and it is reasonably priced</p>
							<ul class="clearfix">
								<li><small>1周前点评</small></li>
								<li><a href="{% url 'category-companies-listings-filterstop-mer' %}?name=" class="btn_1 small">Read other reviews</a></li>
							</ul>
						</div>
						<!-- /review_listing -->
					</div>
					<!-- /latest_review -->

				</div>
			</div>
			<!-- /row -->
            </form>
        </div>
		<!-- /container -->
	</main>
	<!--/main-->

	</div>
	<!-- page -->
</template>

<script>
    import Header_WB from "../components/Header_WB";
    export default {
        name: "New_Restaurant",
      components: {Header_WB}
    }
</script>

<style scoped>

</style>
