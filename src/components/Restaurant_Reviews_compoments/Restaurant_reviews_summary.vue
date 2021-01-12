<template>
    <div class="reviews_summary">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<figure>
								<img :src="this.resobj.picture"/>
							</figure>
							<small><i class="ti-location-pin">{{this.resobj.res_address}}</i></small>
							<h1 @click="collectRes">{{this.resobj.res_name}} <i class="icon_star_alt" :class="[{'iscollected':isCollected}]" ></i></h1>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>{{resobj.score}}/5.00 - based on {{reviewSumScore.totalSum}} reviews</em></span>
						</div>
						<div class="col-lg-4 review_detail">
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" :style="{width: reviewSumScore['5']+'%'}" :aria-valuenow="reviewSumScore['5']" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>5 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" :style="{width: reviewSumScore['4']+'%'}" :aria-valuenow="reviewSumScore['4']" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>4 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" :style="{width: reviewSumScore['3']+'%'}" :aria-valuenow="reviewSumScore['3']" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>3 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" :style="{width: reviewSumScore['2']+'%'}" :aria-valuenow="reviewSumScore['2']" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>2 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress last">
										<div class="progress-bar" role="progressbar" :style="{width:reviewSumScore['1']+'%' }" :aria-valuenow="reviewSumScore['1']" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>1 stars</strong></div>
							</div>
							<!-- /row -->
						</div>
					</div>
				</div>
				<!-- /container -->
			</div>
		</div>
		<!-- /reviews_summary -->
</template>

<script>
	  import {getLocalStore} from "../../assets/storage/localstorage";
    export default {
      name: "Restaurant_reviews_summary",
      props:['resobj'],
      data(){
        return{
          collectInfo:{},
          resObj:{},
          isCollected:false,
          scoreNum:{
            "1":null,
            "2":null,
            "3":null,
            "4":null,
            "5":null,
          },
        }
      },
      computed:{
        userID(){
          return JSON.parse(getLocalStore("userLogin")).user_id;
        },
        reviewSumScore(){
          var sum=0;
          for (var index in this.scoreNum){
            //console.log('key=',index,'value=',this.scoreNum[index]);
            sum=sum+this.scoreNum[index];
          }
          var scoreParams={
            'totalSum':0,
            "1":0,
            '2':0,
            '3':0,
            '4':0,
            '5':0,
          };
          scoreParams['totalSum']=sum;
          var keylist=['1','2','3','4','5'];
          for (var i=0;i<keylist.length;i++){
            var key=keylist[i];
            scoreParams[key]=this.scoreNum.hasOwnProperty(key)?(this.scoreNum[key]/sum)*100:0;
          }
          //console.log(scoreParams);
          return scoreParams;
        },
      },
      watch:{
        resobj:function (newVal,oldVal) {
          this.resObj=newVal;
          this.getScoreNum();
          newVal && this.getIsCollect();
        }
      },
      created() {

      },
      mounted() {
        //this.getIsCollect();
        //this.getScoreNum();
      },
      methods:{
        //获取餐馆的各个评分的数量
        getScoreNum(){
          let tmpThis=this;
          let resId=this.resobj.id;
          //console.log("ID:",resId);
          this.$httpM.get(this.$api.Restaurant.scoreCount.replace("{id}",resId),false)
          .then(function (response) {
            console.log(response.data);
            tmpThis.scoreNum=response.data;
          })
          .catch(function (err) {
          })
        },
        //用户是否收藏了该餐馆
        getIsCollect(){
          var tmpThis=this;
          var params_={
            user:this.userID,
            restaurant:this.resobj.id,
          };

          this.$httpM.post(this.$api.Collection.collected,params_,false)
          .then(function (response) {
            console.log("是否收藏："+response.data);
             tmpThis.isCollected = response.data === 1;
          });
        },
        //收藏与取消收藏
        collectRes(){
          var postParam={
              user:this.userID,
              restaurant:this.resobj.id,
            };
          var tmpThis=this;
          if (!this.isCollected){
            //console.log("postCollect:",postParam);
            this.$httpM.post(this.$api.Collection.collectRes,postParam,false)
            .then(function (response) {
              if(response.data.id){
                alert("收藏成功");
                tmpThis.collectInfo=response.data;
                tmpThis.isCollected=true;
                //console.log("collectInfo",tmpThis.collectInfo)
              }
            })
            .catch(function (err) {
                alert("收藏出错");
            })
          }
          else {
            //console.log("cancleCollect:",postParam);
            this.$httpM.post(this.$api.Collection.collectDel,postParam,false)
            .then(function (response) {
              if (response.data==="删除成功!"){
                alert("取消收藏");
                tmpThis.isCollected=false;
              }

            })
            .catch(function (err) {
                alert("取消收藏出错");
            })
          }

        }
      },

    }
</script>

<style scoped>
img{
	object-fit: cover;
}
.iscollected{
	color: #FF794D;
}
</style>
