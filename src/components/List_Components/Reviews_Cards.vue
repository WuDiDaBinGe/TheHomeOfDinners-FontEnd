<template>
  <div class="review_card">
    <div class="row">
      <div class="col-md-2 user_info">
        <figure><img src="** review.photo *" alt=""></figure>
        <h5>** user.name *</h5>
      </div>
      <div class="col-md-10 review_content">
        <div class="clearfix add_bottom_15">
          <span class="rating"><i class="icon_star" v-for="(i,index) in 5" :class="[{'empty':(index-review.score)>=0}]"></i><em class="text-capitalize">{{review.score}}/5.00</em></span>

          <em> {{review.datetime}} </em>
        </div>
        <h5>{{review.text}}</h5>
        <input name="text" id="text" value="** review.text *" style="display: none">
        <input name="rname" id="rname" value="** review.rest *" style="display: none">

        <ul>
          <li><a href="#0" value='** review.text *' onclick="var i=this.getAttribute('value');u(i);"><i class="icon_like_alt"></i><span>Useful</span></a></li>
          <li><a href="#0"><i class="icon_dislike_alt"></i><span>Not useful</span></a></li>
          <li><span>Share</span> <a href="#0"><i class="ti-facebook"></i></a> <a href="#0"><i class="ti-twitter-alt"></i></a> <a href="#0"><i class="ti-google"></i></a></li>
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
    export default {
      name: "Reviews_Cards",
      props:['review'],
      data(){
        return{
          is_flag_:false,
          userName:null,
        }
      },
      created() {
        this.userName="";
        //this.$httpM.get()
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
    }
</script>

<style scoped>

</style>
