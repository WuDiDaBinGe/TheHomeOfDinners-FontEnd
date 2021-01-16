<template>
<div id="AnalyzeResult">
  <Header_WB></Header_WB>
  	<div class="filters_listing sticky_horizontal">
			<div class="container">
        <h4>模型分析</h4>
				<ul class="clearfix">
					<li>
						<div class="switch-field">
              <input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" class="selected">
							<label for="all" @click="Showflag(1)">积极评论</label>
              <input type="radio" id="high" name="listing_filter" value="high" data-filter=".high">
							<label for="high" @click="Showflag(2)">消极评论</label>
						</div>
					</li>

				</ul>

			</div>
			<!-- /container -->
		</div>
<div class="container margin_60_35">
        <div class="row">
        <div class="col-8">
        <Reviews_Cards v-for="review in Good_Reviews_Cmputed" :review="review" :key="review.id" v-show="Good_Reviews_Show"></Reviews_Cards>
<Reviews_Cards v-for="review in Bad_Reviews_Cmputed" :review="review" :key="review.id" v-show="Bad_Reviews_Show"></Reviews_Cards>
          </div>
         <div class="col-4">
           <img class="img-rounded wordCloud " :src="wordCloudUrl">
           <Restaurant_reviews_pie_graph :nav="pie_d.nav" :pos="pie_d.pos"></Restaurant_reviews_pie_graph>
         </div>
      </div>
</div>
  <Footer_com></Footer_com>
</div>
</template>

<script>
import Header_WB from "../components/Header_WB";
import Reviews_Cards from "../components/List_Components/Reviews_Cards"
import Footer_com from "../components/Footer_com"
import Restaurant_reviews_pie_graph from "../components/Restaurant_Reviews_compoments/Restaurant_reviews_pie_graph";
export default {
  components:{Header_WB,Reviews_Cards,Footer_com,Restaurant_reviews_pie_graph},
name: "Restaurant_Review_AnalyzeResult",
  data(){
    return{
      res_id: this.$route.query.id,
      total_count: 0,
      Good_Reviews_Show: true,
      Bad_Reviews_Show: false,
      resReviews:null,
      wordCloudUrl:"",
      pie_d:{
              pos:0,
              nav:0,
            },
    }
  },
  methods:{
    Showflag(flag){
      if(flag==1){
        this.Good_Reviews_Show=true;
        this.Bad_Reviews_Show=false;
      }
      else{
        this.Good_Reviews_Show=false;
        this.Bad_Reviews_Show=true;
      }
    },
    getResReviews(url){
          let tmpThis=this;
          //查询餐馆评论
          this.$httpM.get(url,false)
          .then(function (response) {
            tmpThis.resReviews=response.data.results;
            tmpThis.total_count=response.data.count;
          })
          .catch(function (err) {

          })
        },
    getWordCloud(){
          let tmpThis=this;
          this.$httpM.get(this.$api.Restaurant.wordCloud.replace("{id}",this.res_id))
          .then(function (response){
            tmpThis.wordCloudUrl='http://39.96.37.82:8888/'+response.data;

          })
          .catch(function (err){

          })
        },
    getPieData() {
          let tmpThis = this;
          let res_id = this.res_id;
          this.$httpM.get(this.$api.Restaurant.modelpredict.replace("{id}",res_id), false)
            .then(response => {
              let sum=response.data.pos+response.data.nav;
              tmpThis.pie_d.pos = Math.round(response.data.pos*100/sum);
              tmpThis.pie_d.nav = 100-tmpThis.pie_d.pos;
          }).catch(function (err) {

          })
        },
  },
  created() {
    let res_id=this.res_id;
    let url=this.$api.Review.RestaurantReview.replace('{id}',res_id);
    this.getResReviews(url);
    this.getPieData();
    this.getWordCloud();
  },
  computed:{
    Good_Reviews_Cmputed(){
      if(this.resReviews!=null)
      return this.resReviews.filter(function (item){
        return item.analyze_result==="0"
      })
    },
    Bad_Reviews_Cmputed(){
      if(this.resReviews!=null)
      return this.resReviews.filter(function (item){
        return item.analyze_result!=="0"
      })
    }
  }


}
</script>

<style scoped>

</style>
