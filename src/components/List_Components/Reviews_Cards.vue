<template>
  <div class="review_card">
    <div class="row">
      <div class="col-md-2 user_info">
        <figure><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531206692,1963771943&fm=26&gp=0.jpg" alt=""></figure>
        <h5>{{reviewUser.username}}</h5>
      </div>
      <div class="col-md-10 review_content">
        <div class="clearfix add_bottom_15">
          <span class="rating"><i class="icon_star" v-for="(i,index) in 5" :class="[{'empty':(index-review.score)>=0}]"></i><em class="text-capitalize">{{review.score}}/5</em></span>
          <em class="text-body" style="font-size: 18px;font-style: normal"> {{review.res_name}}</em><br>
          <small> {{review.meal_time}} </small>
        </div>
        <h5>{{review.text}}</h5>
        <input name="text" id="text" value="** review.text *" style="display: none">
        <input name="rname" id="rname" value="** review.rest *" style="display: none">

        <ul>
          <li><a href="#0" value='**review.text*' onclick="var i=this.getAttribute('value');u(i);"><i class="icon_like_alt"></i><span>Useful</span></a></li>
          <li><a href="#0"><i class="icon_dislike_alt"></i><span>Not useful</span></a></li>
          <li>评论时间：{{review.datetime.split("T")[0]}}</li>
          <li @click="showDelReviewConfirm"><a><i class="ti-trash text-danger">删除</i></a></li>
        </ul>

      </div>
    </div>
    <!-- /row -->
    <div class="row reply">
      <div class="col-md-2 user_info">
        <figure><img src="/static/img/avatar.jpg" alt=""></figure>
      </div>
      <div class="col-md-10">
        <div class="review_content">
          <strong>Reply from Good Electronics</strong>
          <em>Published 3 minutes ago</em>
          <p><br>Hi Monika,<br><br>Glad you are satisfied with the dishes and services in our restaurant, we will do our best to make you enjoy the best service, thank you for coming and hope to see you again next time!<br><br>Thanks</p>
        </div>
      </div>
    </div>
    <!-- /reply -->
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
              console.log('Cancel');
            },
          });
        },
      }
    }
</script>

<style scoped>

</style>
