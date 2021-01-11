<template>
  <div class="col-lg-4">
    <div class="box_general company_info">
      <h3>{{resobj.res_name}}</h3>

      <p>￥49 - ￥139 黎巴嫩菜, 地中海, 街边小吃, 中东风味 适合素食主义者, 适合严格素食者, 清真菜, 提供无麸质美食 </p>
      <p><strong>Address</strong><br>{{resobj.res_address}}</p>
      <p><strong>营业时间</strong><br>{{resobj.business_time}}</p>
      <p><strong>Telephone</strong><br>{{resobj.mobile}}</p>
      <p class="follow_company"><strong>分享</strong><br><a href="#0"><i class="social_facebook_circle"></i></a><a href="#0"><i class="social_twitter_circle"></i></a><a href="#0"><i class="social_googleplus_circle"></i></a><a href="#0"><i class="social_instagram_circle"></i></a></p>
      <p><button class="btn-info btn-lg" @click="writeReview">写评论</button></p>
    </div>
    <div id="main3" style="width: 400px;height:400px;margin:0 auto;"></div>
  </div>
</template>

<script>
    export default {
        name: "Restaurant_Info_Card",
        props:['resobj'],
        methods:{
          writeReview(){
            this.$router.push({name:'write_reviews',query:{resId:this.resobj.id}});
          }
        }
    }
</script>

<style scoped>

</style>
