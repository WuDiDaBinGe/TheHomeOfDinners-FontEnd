<template>
  <div id="page">

	<Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="user_summary">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<figure>
								<img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531206692,1963771943&fm=26&gp=0.jpg">
							</figure>
							<h1>{{user.username}}</h1>
							<span>角色：{{user.role}}</span>
						</div>
						<div class="col-md-6">
							<ul>
								<li @click="getMyinfo">
									<strong>1</strong>
                  <a><i class="icon-user-1"></i> 个人信息</a>
								</li>
								<li @click="getMyReviews">
									<strong>{{myReviewListInfo.count}}</strong>
                  <a><i class="icon-menu"></i> 评论</a>
								</li>
								<li @click="getMyRes">
									<strong>{{myCollection.count}}</strong>
                  <a><i class="icon_star"></i> 收藏</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- /container -->
			</div>
		</div>
		<!-- /user_summary -->


		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
          <UserInfo_form v-show="myInfoFlag"></UserInfo_form>
          <div v-show="myReviewFlag">
            <Reviews_Cards v-for="review in myReviewListInfo.results" :review="review" :key="review.id"></Reviews_Cards>
            <a-pagination :default-current="0" :total="myReviewListInfo.count" :defaultPageSize="8" class="pagination__wrapper add_bottom_30" @change="pageChange"/>
          </div>
          <restaurant_item v-show="myCollectionFlag" :parentName="this.MyName"></restaurant_item>
				</div>
				<!-- /col -->
				<div class="col-lg-4" id="sidebar">
					<div class="box_general">
						<h5>Delete account</h5>
						<p>delete and exit system</p>
						<a href="#" class="btn_1 small" onclick="document.getElementById('cho').value='2';document.getElementById('changeuser').submit();">Delete account</a>
					</div>
				</div>
			</div>
			<!-- /row -->
		</div>

		<!-- /container -->


	</main>
	<!--/main-->

	<Footer_com></Footer_com>
	<!--/footer-->
	</div>
	<!-- page -->
</template>

<script>
    import Footer_com from "../components/Footer_com";
    import Header_WB from "../components/Header_WB";
    import {getLocalStore} from "../assets/storage/localstorage";
    import Reviews_Cards from "../components/List_Components/Reviews_Cards";
    import UserInfo_form from "../components/userInfo_components/UserInfo_form";
    import Restaurant_item from "../components/List_Components/restaurant_item";
    export default {
    name: "UserInfoSetting",
		components: {Restaurant_item, Reviews_Cards, Header_WB, Footer_com,UserInfo_form},
		data(){
			return{
				user:{
					username:"",
					pic_src:"",
					mobile:"",
					id:"",
					role:"",
				},
        myInfoFlag:true,
        myReviewFlag:false,
        myCollectionFlag:false,
        myReviewListInfo:{},
        myCollection:{},
        MyName:"UserInfo",
			}
		},
    computed:{
      userId(){
        return JSON.parse(getLocalStore("userLogin"))['user_id'];
      }
    },
    created() {
      //查询用户信息
      this.getMyInfo();
      //查询用户的评论
      this.getMyReviewList(this.$api.User.userReview.replace("{id}",this.userId));
      //查询用户收藏的餐馆
      this.getMyCollectRes();
    },
    methods:{
      //查询用户信息
      getMyInfo(){
        let tmpThis=this;
        this.$httpM.get(this.$api.User.read.replace("{id}",this.userId),false)
        .then(function (response) {
          tmpThis.user=response.data;
        })
        .catch(function (err) {

        })
      },
      //查询用户收藏
      getMyCollectRes(){
        let tmpThis=this;
        this.$httpM.get(this.$api.User.userCollectionRes.replace("{id}",this.userId),false)
        .then(function (response) {
          tmpThis.myCollection=response.data;
        })
        .catch(function (err) {

        })
      },
      //查询用户评论
      getMyReviewList(url){
        let tmpThis=this;
        this.$httpM.get(url,false)
        .then(function (response) {
          tmpThis.myReviewListInfo=response.data;
        })
        .catch(function (err) {

        })
      },
      //改变页数
      pageChange(pageNumber){
        let url=this.$api.User.userReview.replace("{id}",this.userId);
        url=url+'?page='+pageNumber;
        this.getMyReviewList(url);
      },
      getMyinfo(){
        this.myInfoFlag=true;
        this.myReviewFlag=false;
        this.myCollectionFlag=false;
      },
      getMyReviews(){
        this.myInfoFlag=false;
        this.myReviewFlag=true;
        this.myCollectionFlag=false;
      },
      getMyRes(){
        this.myInfoFlag=false;
        this.myReviewFlag=false;
        this.myCollectionFlag=true;
      },

		}

    }
</script>

<style scoped>

</style>
