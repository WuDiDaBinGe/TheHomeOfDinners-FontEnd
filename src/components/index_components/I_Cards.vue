<template>
    <div class="container margin_60_35">
			<div class="main_title_3">
					<h2>Top Categories</h2>
					<p>Choose the restaurant you want to know.</p>
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=">View all</a>
				</div>
            <div class="row justify-content-center">

				<div class="col-lg-3 col-6" v-for="item in card_lists">
					<a href="{% url 'category-companies-listings-filterstop-guest' %}?name=Lebanese" class="box_cat_home">
						<img :src="item.img_path" width="65" height="65" alt="">
						<h3>{{item.name}}</h3>
						<ul class="clearfix">
							<li><s>{{item.result}}</s> Results</li>
							<li><i class="icon-comment"></i><strong>{{item.review_num}}</strong>Reviews</li>
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
        name: "I_Cards",
        data(){
          return{
            card_lists:[
              {name:"label",result:2,review_num:100,img_path:"/static/img/taco.svg"},
              {name:"Cafe",result:2,review_num:100,img_path:"/static/img/latte.svg"},
              {name:"Bar",result:2,review_num:100,img_path:"/static/img/glass.svg"},
              {name:"Pizza",result:2,review_num:100,img_path:"/static/img/pizza.svg"},
              {name:"Seafood",result:2,review_num:100,img_path:"/static/img/tom-yum.svg"},
              {name:"Roast",result:2,review_num:100,img_path:"/static/img/sausage.svg"},
              {name:"Spaghetti",result:2,review_num:100,img_path:"/static/img/food.svg"},
              {name:"Dessert",result:2,review_num:100,img_path:"/static/img/pancake.svg"},
            ],
          }
        }
    }
</script>

<style scoped>

</style>
