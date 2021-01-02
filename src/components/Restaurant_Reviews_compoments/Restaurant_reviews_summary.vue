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
							<h1 @click="collectRes"><i class="icon_star_alt" :class="[{'iscollected':isCollected}]" ></i>{{this.resobj.res_name}} </h1>
							<span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>{{resobj.score}}/5.00 - based on {{resobj.collection_count}} reviews</em></span>
						</div>
						<div class="col-lg-4 review_detail">
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>5 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>4 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>3 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div class="col-lg-3 col-3 text-right"><strong>2 stars</strong></div>
							</div>
							<!-- /row -->
							<div class="row">
								<div class="col-lg-9 col-9">
									<div class="progress last">
										<div class="progress-bar" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
        }
      },
      computed:{
        userID(){
          return JSON.parse(getLocalStore("userLogin")).user_id;
        },
      },
      watch:{
        resobj:function (newVal,oldVal) {
          this.resObj=newVal;
          newVal && this.getIsCollect();
        }
      },
      mounted() {
        //this.getIsCollect();
      },
      methods:{
        getIsCollect(){
          var tmpThis=this;
          var params_={
            user:this.userID,
            restaurant:this.resobj.id,
          };
          console.log("asdsa",params_);
          this.$httpM.post(this.$api.Collection.collected,params_,false)
          .then(function (response) {
            console.log("是否收藏："+response.data);
             tmpThis.isCollected = response.data === 1;
          });
        },
        collectRes(){
          if (!this.isCollected){
             var postParam={
              user:this.userID,
              restaurant:this.resobj.id,
            };
            var tmpThis=this;
            console.log("postCollect:",postParam);
            this.$httpM.post(this.$api.Collection.collectRes,postParam,false)
            .then(function (response) {
              if(response.data.id){
                alert("收藏成功");
                tmpThis.collectInfo=response.data;
                tmpThis.isCollected=true;
                console.log("collectInfo",tmpThis.collectInfo)
              }
            })
            .catch(function (err) {
                alert("收藏出错");
            })
          }
          else {
            var collectId=this.collectInfo.id;
            this.$httpM.del(this.$api.Collection.collectDel,{params: {id:collectId}},false)
            .then(function (response) {
                alert("取消收藏");
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
