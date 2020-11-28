<template>
    <div class="bg_color_1">
		<div class="container margin_60">
			<div class="main_title_3">
				<h2>Latest Reviews</h2>
				<p>Join to read more.</p>
				<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=">View all</a>
			</div>

			<div id="reccomended" class="owl-carousel owl-theme">
				<div class="item">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img src="https://cc.ddcdn.com/img2/daodao/site/no_user_photo_daodao.gif" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
							<small>用餐日期：2020年2月</small>
						</div>
						<h3><strong>Tripadvisor会员</strong> reviewed Hiba Street</h3>
						<h4>"Kind people, brilliant food!"</h4>
						<p>I have to say they have one of the fastest delivery times in the city.</p>
						<ul class="clearfix">
							<li><small>Published: 昨天点评</small></li>
							<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=" class="btn_1 small">Read all reviews</a></li>
						</ul>
					</div>
				</div>

				<div class="item">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img src="https://ccm.ddcdn.com/ext/photo-s/01/2a/fd/a2/avatar.jpg" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><em>5.00/5.00</em></span>
							<small>用餐日期：2020年1月</small>
						</div>
						<h3><strong>chetm92</strong> reviewed Amrutha Lounge</h3>
						<h4>"Absolute gem."</h4>
						<p>BEST spicy tuna roll, great asian salad.</p>
						<ul class="clearfix">
							<li><small>Published: 6天前点评</small></li>
							<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=" class="btn_1 small">Read all reviews</a></li>
						</ul>
					</div>
				</div>

				<div class="item">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img src="https://ccm.ddcdn.com/ext/photo-s/01/2e/70/72/avatar054.jpg" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
							<small>用餐日期：2020年1月</small>
						</div>
						<h3><strong>383idila</strong> reviewed Dobar</h3>
						<h4>"100% will recommend this hidden gem!!!"</h4>
						<p>last Tuesday for a late lunch with a friend.</p>
						<ul class="clearfix">
							<li><small>Published: 3周前点评</small></li>
							<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=" class="btn_1 small">Read all reviews</a></li>
						</ul>
					</div>
				</div>

				<div class="item">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img src="https://ccm.ddcdn.com/ext/photo-s/01/2a/fd/9e/avatar.jpg" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><em>4.50/5.00</em></span>
							<small>用餐日期：2020年1月</small>
						</div>
						<h3><strong>leoniel431</strong> reviewed Zeret Kitchen</h3>
						<h4>"Tasty and cosy"</h4>
						<p>Here's the thing, you're in the best city in the world for restaurants.</p>
						<ul class="clearfix">
							<li><small>Published: 4周前点评</small></li>
							<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=" class="btn_1 small">Read all reviews</a></li>
						</ul>
					</div>
				</div>

				<div class="item">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img src="https://ccm.ddcdn.com/ext/photo-l/0a/b0/21/c6/jordan-k.jpg" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><i class="icon_star empty"></i><em>3.50/5.00</em></span>
							<small>用餐日期：2018年7月</small>
						</div>
						<h3><strong>916libertys</strong> reviewed Flour To The People!</h3>
						<h4>"Good pizza"</h4>
						<p>Even for two very hungry people there is plenty of food left to be taken home (it reheats really well also).</p>
						<ul class="clearfix">
							<li><small>Published: 2018年7月9日的点评</small></li>
							<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=" class="btn_1 small">Read all reviews</a></li>
						</ul>
					</div>
				</div>

			</div>
			<!-- /carousel -->
		</div>
		<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
</template>

<script>
    export default {
        name: "I_LastReviews"
    }
</script>

<style scoped>

</style>
