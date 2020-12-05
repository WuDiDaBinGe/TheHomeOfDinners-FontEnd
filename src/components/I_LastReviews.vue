<template>
    <div class="bg_color_1">
		<div class="container margin_60">
			<div class="main_title_3">
				<h2>Latest Reviews</h2>
				<p>Join to read more.</p>
				<a href="">View all</a>
			</div>

			<div id="reccomended" class="owl-carousel owl-theme" style="display: inline-block">


				<div class="item" v-for="item in review_list">
					<div class="review_listing">
						<div class="clearfix">
							<figure><img :src="item.img_src" alt=""></figure>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><i class="icon_star empty"></i><em>{{item.score}}/5.00</em></span>
							<small>用餐日期：{{item.eat_date}}</small>
						</div>
						<h3><strong>{{item.restaurant_name}}</strong> reviewed {{item.username}}!</h3>
						<h4>"{{item.review_title}}"</h4>
						<p>{{item.review_context}}</p>
						<ul class="clearfix">
							<li><small>Published: {{item.review_time}}</small></li>
							<li><a href="" class="btn_1 small">Read all reviews</a></li>
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
        name: "I_LastReviews",
        data(){
          return{
            review_list:[
            { img_src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2948416935,2833926426&fm=26&gp=0.jpg",
              score:"3.50",
              eat_date:"2018年7月",
              restaurant_name:"916libertys",
              username:"Flour To The People",
              review_title:"Good pizza",
              review_context:"Even for two very hungry people there is plenty of food left to be taken home (it reheats really well also).",
              review_time:"2018年7月9日"
            },
            { img_src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2948416935,2833926426&fm=26&gp=0.jpg",
              score:"3.50",
              eat_date:"2018年7月",
              restaurant_name:"916libertys",
              username:"Flour To The People",
              review_title:"Good pizza",
              review_context:"Even for two very hungry people there is plenty of food left to be taken home (it reheats really well also).",
              review_time:"2018年7月9日"
            },
            { img_src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2948416935,2833926426&fm=26&gp=0.jpg",
              score:"3.50",
              eat_date:"2018年7月",
              restaurant_name:"916libertys",
              username:"Flour To The People",
              review_title:"Good pizza",
              review_context:"Even for two very hungry people there is plenty of food left to be taken home (it reheats really well also).",
              review_time:"2018年7月9日"
            },

          ]
          }

        }
    }
</script>

<style scoped>

</style>
