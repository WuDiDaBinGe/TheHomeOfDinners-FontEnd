<template>
    <div id="page">

	<Header_WB></Header_WB>

	<main>
		<Restaurant_reviews_summary :resobj="res"></Restaurant_reviews_summary>

		<div class="container margin_60_35">
			<div class="row">

			<div class="col-lg-8">
					<Restaurant_Pictures_Tab></Restaurant_Pictures_Tab>
					{{res_id}}
					<div class="review_card">
						<div class="row">
							<div class="col-md-2 user_info">
								<figure><img src="** Review.photo *" alt=""></figure>
								<h5>** Review.name *</h5>
							</div>
							<div class="col-md-10 review_content">
								<div class="clearfix add_bottom_15">
									<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
									<em>** Review.reviewtime *</em>
									<br>
									<em>** Review.mealtime *</em>
								</div>
								<h4>"** Review.title *"</h4>
								<p>** Review.text|linebreaksbr *</p>
								<input name="text" id="text" value="** Review.text *" style="display: none">
								<input name="rname" id="rname" value="** Review.rest *" style="display: none">

								<ul>
									<li><a href="#0" value='** Review.text *' onclick="var i=this.getAttribute('value');u(i);"><i class="icon_like_alt"></i><span>Useful</span></a></li>
									<li><a href="#0"><i class="icon_dislike_alt"></i><span>Not useful</span></a></li>
									<li><span>Share</span> <a href="#0"><i class="ti-facebook"></i></a> <a href="#0"><i class="ti-twitter-alt"></i></a> <a href="#0"><i class="ti-google"></i></a></li>
								</ul>

							</div>
						</div>
						<!-- /row -->
						<div class="row reply">
							<div class="col-md-2 user_info">
								<figure><img src="/static/img/avatar.jpg" alt=""></figure>
							</div>
							<div class="col-md-10">
								<div class="review_content">
									<strong>Reply from Good Electronics</strong>
									<em>Published 3 minutes ago</em>
									<p><br>Hi Monika,<br><br>Glad you are satisfied with the dishes and services in our restaurant, we will do our best to make you enjoy the best service, thank you for coming and hope to see you again next time!<br><br>Thanks</p>
								</div>
							</div>
						</div>
						<!-- /reply -->
					</div>

					<!-- /review_card -->
					<Reviews_Cards></Reviews_Cards>
					<Reviews_Cards></Reviews_Cards>
					<Reviews_Cards></Reviews_Cards>
					<Pagination></Pagination>
				</div>
				<!-- /col -->
        		<Restaurant_Info_Card :resobj="res"></Restaurant_Info_Card>

			</div>
			<!-- /row -->
		</div>
		<!-- /container -->

	</main>
	<!--/main-->

	<Footer_com></Footer_com>
	</div>
	<!-- page -->
</template>

<script>
    import Header_WB from "../components/Header_WB";
    import Pagination from "../components/List_Components/Pagination";
    import Footer_com from "../components/Footer_com";
    import Reviews_Cards from "../components/List_Components/Reviews_Cards";
    import Restaurant_Info_Card from "../components/Restaurant_Reviews_compoments/Restaurant_Info_Card";
    import Restaurant_reviews_summary from "../components/Restaurant_Reviews_compoments/Restaurant_reviews_summary";
    import Restaurant_Pictures_Tab from "../components/Restaurant_Reviews_compoments/Restaurant_Pictures_Tab";
    export default {
      name: "ReviewsPage",
      components: {
        Restaurant_Pictures_Tab, Restaurant_Info_Card, Footer_com, Restaurant_reviews_summary,
        Pagination, Header_WB,Reviews_Cards},
      data(){
        return{
		  res_id:this.$route.params.id,
		  res:{},
        }
	  },
	  created() {
		var tmpThis=this;
		var res_id=tmpThis.res_id;
		//请求方法查询
		this.$httpM.get(this.$api.Restaurant.singleRestaurant+res_id,false)
		.then(response=>{
			tmpThis.res=response.data;

		})
		.catch(err=>{
			alert("出错！");
		})
	  },

    }
</script>

<style scoped>

</style>
