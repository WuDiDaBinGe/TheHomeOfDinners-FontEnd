<template>
  <div class="review_card">
    <div class="row">
      <div class="col-md-2 user_info">
        <figure><img :src="reviewUser.picture" alt=""></figure>
        <h5>{{reviewUser.username}}</h5>
      </div>
      <div class="col-md-10 review_content">
        <div class="clearfix add_bottom_15">
          <span class="rating"><i class="icon_star" v-for="(i,index) in 5" :class="[{'empty':(index-review.score)>=0}]"></i><em class="text-capitalize">{{review.score}}/5</em></span>
          <em class="text-body" style="font-size: 18px;font-style: normal"> {{review.res_name}}</em><br>
          <small> {{review.meal_time}} </small>
        </div>
        <h5>{{review.text}}</h5>

        <ul>
          <li :class="[{'text-danger':review.analyze_result!=='0'},{'text-success':review.analyze_result==='0'}]">分析结果：{{review.analyze_result!=='0'?'坏评':'好评'}}</li>
          <li></li>
          <li>评论时间：{{review.datetime.split("T")[0]}}</li>
          <li @click="showDelReviewConfirm" v-show="loginUserID===review.user"><a><i class="ti-trash text-danger">删除</i></a></li>
        </ul>

      </div>
    </div>
    <!-- /row -->
  </div>
<!-- /review_card -->
</template>

<script>
    import {getLocalStore} from "../../assets/storage/localstorage";
    export default {
      name: "Reviews_Cards",
      props:['review'],
      data(){
        return{
          is_flag_:false,
          reviewUser:{
            id: null,
            mobile: "",
            role: "",
            username: "",
          },
        }
      },
      computed:{
        loginUserID(){
          let user_id=JSON.parse(getLocalStore("userLogin")).user_id;
          return user_id;
        }
      },
      created() {
        let tmpThis=this;
        let userId=this.review.user;
        this.$httpM.get(this.$api.User.read.replace('{id}',userId))
        .then(function (response) {
          tmpThis.reviewUser=response.data;
        })
      },
      beforeRouteEnter (to,from,next){
        if (from.path==="/userinfo"){
          next(vm=>{
            vm.is_flag_=true;
        })
        } else{
          next(vm=>{
            vm.is_flag_=false;
        })
        }
      },
      methods:{
        showDelReviewConfirm(){
          var tmpThis=this;
          this.$confirm({
            title: '你确定要删除本条评论吗?',
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
              //删除本条评论
              tmpThis.$httpM.del(tmpThis.$api.Review.del.replace("{id}",tmpThis.review.id))
              .then(response=>{
                tmpThis.$message.success("删除成功！");
                tmpThis.$router.push('/userinfo');
              })
              .catch(function (err) {

              })
            },
            onCancel() {
            },
          });
        },
      }
    }
</script>

<style scoped>

</style>
