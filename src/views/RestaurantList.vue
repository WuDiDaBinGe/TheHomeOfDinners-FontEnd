<template>
  <div id="page">

	<Header_WB></Header_WB>

	<main>
		<div id="results">
		   <div class="container">
			   <div class="row justify-content-between">
				   <div class="col-lg-3 col-md-4 col-10">
					   <h1><strong>145</strong> result for "Category"</h1>
				   </div>
				   <div class="col-xl-5 col-md-6 col-2">
					   <a href="#0" class="search_mob btn_search_mobile"></a> <!-- /open search panel -->
						<div class="row no-gutters custom-search-input-2 inner">
							<div class="col-lg-7">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="Search reviews for a company">
									<i class="icon_search"></i>
								</div>
							</div>
							<div class="col-lg-4">
								<select class="wide nice-select">
									<option v-for="item in categories_list">{{item}}</option>
								</select>
							</div>
							<div class="col-xl-1 col-lg-1">
								<input type="submit" value="Search">
							</div>
						</div>
				   </div>
			   </div>
			   <!-- /row -->
				<div class="search_mob_wp">
					<div class="custom-search-input-2">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Search reviews...">
							<i class="icon_search"></i>
						</div>
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Where">
							<i class="icon_pin_alt"></i>
						</div>
						<select class="wide">
							<option v-for="item in categories_list">{{item}}</option>
						</select>
						<input type="submit" value="Search">
					</div>
				</div>
				<!-- /search_mobile -->
		   </div>
		   <!-- /container -->
	   </div>
	   <!-- /results -->

		<div class="filters_listing sticky_horizontal">
			<div class="container">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" class="selected">
							<label for="all">All</label>
							<input type="radio" id="high" name="listing_filter" value="high" data-filter=".high">
							<label for="high">High rated</label>
							<input type="radio" id="low" name="listing_filter" value="low" data-filter=".low">
							<label for="low">Low rated</label>
						</div>
					</li>
					<li><a class="btn_filt" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
				</ul>
			</div>
			<!-- /container -->
		</div>
		<!-- /filters -->

		<div class="collapse" id="filters">
			<div class="container margin_30_5">
				<div class="row">
					<div class="col-md-4">
						<h6>Rating</h6>
						<ul>
							<li>
								<label class="container_check">Superb 9+ <small>67</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Very Good 8+ <small>89</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Good 7+ <small>45</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Pleasant 6+ <small>78</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h6>Tags</h6>
						<ul>
							<li>
								<label class="container_check">Soluta mei <small>12</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Enim suscipit  <small>11</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Duis veri <small>23</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
							<li>
								<label class="container_check">Dicunt nam <small>56</small>
								  <input type="checkbox">
								  <span class="checkmark"></span>
								</label>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<div class="add_bottom_30">
						<h6>Distance</h6>
							<div class="distance"> Radius around selected destination <span></span> km</div>
							<input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal">
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
		</div>
		<!-- /Filters -->

		<div class="container margin_60_35">

			<div class="isotope-wrapper">

				<div class="company_listing isotope-item high">
					<div class="row">

						<div class="col-md-9">
							<div class="company_info">
								<figure><a href="{% url 'reviews-page' %}?name= Restaurant.name "><img src=" Restaurant.photo " alt="" width="25%"></a></figure>
								<h3> Restaurant.name </h3>
								<p> Restaurant.food </p>
                <p> Restaurant.address </p>
							</div>
						</div>
						<div class="col-md-3">
							<div class="text-center float-lg-right">
							<span class="rating"><strong>Restaurant.reviewnum  Restaurant.score  Restaurant.rank </strong><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i></span>
							<a href="{% url 'reviews-page' %}" class="btn_1 small">Read more</a>
							</div>
						</div>
					</div>

				</div>
				<!-- /company_listing -->

				<div class="company_listing isotope-item high">
					<div class="row">
						<div class="col-md-9">
							<div class="company_info">
								<figure><a href="{% url 'reviews-page' %}"><img src="/static/img/brands/2.png" alt=""></a></figure>
								<h3>Timberland</h3>
								<p>Tale tollit vocent quo ut. Eu vix menandri persequeris accommodare, nam ei virtute dissentiet. Nec prima indoctum ei, vis eu justo dictas tamquam...</p>
							</div>
						</div>
						<div class="col-md-3">
							<div class="text-center float-lg-right">
							<span class="rating"><strong>Based on 265 reviews</strong><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i></span>
							<a href="{% url 'reviews-page' %}" class="btn_1 small">Read more</a>
							</div>
						</div>
					</div>
				</div>
				<!-- /company_listing -->


			</div>
			<!-- /isotope-wrapper -->

			<p class="text-center"><a href="#0" class="btn_1 rounded add_top_15">Load more</a></p>

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
    import Footer_com from "../components/Footer_com";
    export default {
        name: "RestaurantList",
        data(){
          return{
            categories_list:["All Categories","Lebanese","Cafe","Bar","Pizza","Seafood","Roast","Spaghetti","Dessert"],
          }
        },
        components: {Footer_com, Header_WB}
    }
</script>

<style scoped>

</style>
