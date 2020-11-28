<template>
    <div class="bg_color_1">
			<div class="container margin_60_35">
				<div class="main_title_3 text-center">
					<h2>ABSA Platform companies categories</h2>
					<p>Main restaurant categories of different country.</p>
				</div>
				<div class="row justify-content-center">
					<div class="col-xl-10 col-lg-12">
						<div class="all_categories clearfix add_bottom_30">
							<ul>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Lebanese"><strong>((result2.0))</strong>Lebanese</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Indian"><strong>((result2.1))</strong>Indian</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Mediterranean"><strong>((result2.2))</strong>Mediterranean</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Asia"><strong>((result2.3))</strong>Asia</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Europe"><strong>((result2.4))</strong>Europe</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=England"><strong>((result2.5))</strong>England</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Italy"><strong>((result2.6))</strong>Italy</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=French"><strong>((result2.7))</strong>French</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Spanish"><strong>((result2.8))</strong>Spanish</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Latin"><strong>((result2.9))</strong>Latin</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Ireland"><strong>((result2.10))</strong>Ireland</a></li>
								<li><a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Japan"><strong>((result2.11))</strong>Japan</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
</template>

<script>
    export default {
        name: "I_RegionList"
    }
</script>

<style scoped>

</style>
