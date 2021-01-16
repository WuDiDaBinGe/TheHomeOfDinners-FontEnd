<template>
<div id="AnalyzeResult">
  <Header_WB></Header_WB>
  	<div class="filters_listing sticky_horizontal">
			<div class="container">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
              <input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" class="selected">
							<label for="all" @click="Showflag(1)">好评论</label>
              <input type="radio" id="high" name="listing_filter" value="high" data-filter=".high">
							<label for="high" @click="Showflag(2)">坏评论</label>

						</div>
					</li>

				</ul>

			</div>
			<!-- /container -->
		</div>
<div class="container margin_60_35">

			<div class="isotope-wrapper">
        <Reviews_Cards v-for="review in Good_Reviews_Cmputed" :review="review" :key="review.id" v-show="Good_Reviews_Show"></Reviews_Cards>
<Reviews_Cards v-for="review in Bad_Reviews_Cmputed" :review="review" :key="review.id" v-show="Bad_Reviews_Show"></Reviews_Cards>
      </div>
      </div>

  <Footer_com></Footer_com>
</div>
</template>

<script>
import Header_WB from "../components/Header_WB";
import Reviews_Cards from "../components/List_Components/Reviews_Cards"
import Footer_com from "../components/Footer_com"
export default {
  components:{Header_WB,Reviews_Cards,Footer_com},
name: "Restaurant_Review_AnalyzeResult",
  data(){
    return{
      res: {},
      res_id: this.$route.query.id,
      total_count: 0,
      Good_Reviews_Show: true,
      Bad_Reviews_Show: false,
      resReviews:null,
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
  },
  created() {
    let res_id=this.res_id;
    let url=this.$api.Review.RestaurantReview.replace('{id}',res_id);
    this.getResReviews(url);

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
