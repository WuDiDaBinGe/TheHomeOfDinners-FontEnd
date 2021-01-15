<template>
    <div class="latest_review">
        <h4>{{res_name}}的最新评论</h4>

        <div class="review_listing" v-for="review in review_list">
          <div class="clearfix add_bottom_10">
            <figure><img :src="review.img_src" alt=""></figure>
            <span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>{{review.score}}/5.00</em></span>
            <small>{{review.restaurant_name}}</small>
          </div>
          <h3><strong>{{review.username}}</strong></h3>
          <h4>{{review.review_title}}</h4>
          <p>{{review.review_context}}</p>
          <ul class="clearfix">
            <li><small>{{review.review_time}}</small></li>
            <li><a href="{% url 'category-companies-listings-filterstop-mer' %}?name=" class="btn_1 small">其他评论</a></li>
          </ul>
        </div>
        <!-- /  -->
        <!-- /review_listing -->
    </div>
</template>

<script>
    export default {
      props:{
        res_name:[String],
      },
      name: "LastView_Right",
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
            ],
        }},
    }
</script>

<style scoped>

</style>
