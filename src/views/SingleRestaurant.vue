<template>
    <div id="page">

	<Header_WB></Header_WB>

	<main>
		<Restaurant_reviews_summary :resobj="res"></Restaurant_reviews_summary>

		<div class="container margin_60_35">
			<div class="row">

			<div class="col-lg-8">
					<Restaurant_Pictures_Tab :resObj="res"></Restaurant_Pictures_Tab>
					<!-- /review_card -->
					<Reviews_Cards v-for="review in resReviews" :review="review" :key="review.id"></Reviews_Cards>

          <a-pagination :default-current="0" :total="total_count" :defaultPageSize="page_size_" class="pagination__wrapper add_bottom_30" @change="pageChange"/>

				</div>
				<!-- /col -->
        		<Restaurant_Info_Card :resobj="res"></Restaurant_Info_Card>

			</div>
			<!-- /row -->
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
    import Pagination from "../components/List_Components/Pagination";
    import Footer_com from "../components/Footer_com";
    import Reviews_Cards from "../components/List_Components/Reviews_Cards";
    import Restaurant_Info_Card from "../components/Restaurant_Reviews_compoments/Restaurant_Info_Card";
    import Restaurant_reviews_summary from "../components/Restaurant_Reviews_compoments/Restaurant_reviews_summary";
    import Restaurant_Pictures_Tab from "../components/Restaurant_Reviews_compoments/Restaurant_Pictures_Tab";
    export default {
      name: "ReviewsPage",
      components: {
        Restaurant_Pictures_Tab, Restaurant_Info_Card, Footer_com, Restaurant_reviews_summary,
        Pagination, Header_WB,Reviews_Cards},
        data(){
          return{
            res_id:this.$route.query.id,
            res:{},
            resReviews:null,
            total_count:0,
            next_page_api:"",
            previous_page_api:"",
            page_size_:8,
            current_page:1,
            total_page:0,
          }
      },
      methods:{
        pageChange(pageNumber){
          let url=this.$api.Review.RestaurantReview.replace('{id}',this.res_id);
          url=url+"?page="+pageNumber;
          this.getResReviews(url);
        },
        getResInfo(){
          let tmpThis=this;
          let res_id=tmpThis.res_id;
          //查询餐馆信息
          this.$httpM.get(this.$api.Restaurant.singleRestaurant+res_id,false)
          .then(response=>{
            tmpThis.res=response.data;

          })
          .catch(err=>{
            alert("出错！");
          })
        },
        getResReviews(url){
          let tmpThis=this;
          //查询餐馆评论
          this.$httpM.get(url,false)
          .then(function (response) {
            tmpThis.resReviews=response.data.results;
            tmpThis.total_count=response.data.count;
            tmpThis.next_page_api=response.data.next;
            tmpThis.previous_page_api=response.data.previous;
          })
          .catch(function (err) {

          })
        }
      },
      created() {
        let res_id=this.res_id;
        let url=this.$api.Review.RestaurantReview.replace('{id}',res_id);
        this.getResInfo();
        this.getResReviews(url);
      },

    }
</script>

<style scoped>

</style>
