<template>
    <div class="container margin_60_35">
			<div class="main_title_3">
					<h2>Top Categories</h2>
					<p>Choose the restaurant you want to know.</p>
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=">View all</a>
				</div>
            <div class="row justify-content-center">
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Lebanese" class="box_cat_home">
						<img src="/static/img/taco.svg" width="65" height="65" alt="">
						<h3>Lebanese</h3>
						<ul class="clearfix">
							<li><strong>((result.0))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.0))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Cafe" class="box_cat_home">
						<img src="/static/img/latte.svg" width="65" height="65" alt="">
						<h3>Cafe</h3>
						<ul class="clearfix">
							<li><strong>((result.1))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.1))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Bar" class="box_cat_home">
						<img src="/static/img/glass.svg" width="65" height="65" alt="">
						<h3>Bar</h3>
						<ul class="clearfix">
							<li><strong>((result.2))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.2))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Pizza" class="box_cat_home">
						<img src="/static/img/pizza.svg" width="65" height="65" alt="">
						<h3>Pizza</h3>
						<ul class="clearfix">
							<li><strong>((result.3))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.3))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Seafood" class="box_cat_home">
						<img src="/static/img/tom-yum.svg" width="65" height="65" alt="">
						<h3>Seafood</h3>
						<ul class="clearfix">
							<li><strong>((result.4))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.4))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Roast" class="box_cat_home">
						<img src="/static/img/sausage.svg" width="65" height="65" alt="">
						<h3>Roast</h3>
						<ul class="clearfix">
							<li><strong>((result.5))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.5))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Spaghetti" class="box_cat_home">
						<img src="/static/img/food.svg" width="65" height="65" alt="">
						<h3>Spaghetti</h3>
						<ul class="clearfix">
							<li><strong>((result.6))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.6))</strong>Reviews</li>
						</ul>
					</a>
				</div>
				<div class="col-lg-3 col-6">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Dessert" class="box_cat_home">
						<img src="/static/img/pancake.svg" width="65" height="65" alt="">
						<h3>Dessert</h3>
						<ul class="clearfix">
							<li><strong>((result.7))</strong> Results</li>
							<li><i class="icon-comment"></i><strong>((revi.7))</strong>Reviews</li>
						</ul>
					</a>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
</template>

<script>
    export default {
        name: "I_Cards"
    }
</script>

<style scoped>

</style>
