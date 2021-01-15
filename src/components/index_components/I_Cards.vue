<template>
    <div class="container margin_60_35">
			<div class="main_title_3">
					<h2>热点菜品</h2>
					<p>想一想今天要吃啥？</p>
					<router-link to="/restaurant_list">更多</router-link>
				</div>
            <div class="row justify-content-center">

				<div class="col-lg-4 col-6" v-for="item in card_lists">
					<a  class="box_cat_home">
						<img :src="item.img_path" width="65" height="65" alt="">
						<h3>{{item.name}}</h3>
						<ul class="clearfix">
							<li><s>{{item.result}}</s> 家餐馆</li>
							<li><i class="icon-comment"></i><strong>{{item.review_num}}</strong>条评论</li>
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
              {name:"火锅",result:2,review_num:100,img_path:"/static/img/hotpot.svg"},
              {name:"面粉馆",result:2,review_num:100,img_path:"/static/img/noodles.svg"},
              {name:"西餐",result:2,review_num:100,img_path:"/static/img/pizza.svg"},
              {name:"小吃",result:2,review_num:100,img_path:"/static/img/taco.svg"},
              {name:"自助餐",result:2,review_num:100,img_path:"/static/img/xican.svg"},
            ],
          }
        }
    }
</script>

<style scoped>

</style>
