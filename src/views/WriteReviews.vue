<template>
  <div id="page">
    <Header_WB></Header_WB>
    <main class="margin_main_container">
      <div class="container margin_60_35">
        <form>
        <div class="row">
          <div class="col-lg-8">
            <div class="box_general write_review">
              <h1>给{{resObj.res_name}}写下吃货的评论吧！</h1>
              <h4>({{resObj.res_address}})</h4>
              <div class="rating_submit">
                <div class="form-group">
                <label class="d-block">此餐馆在您心中的分数</label>
                <span class="rating">
                  <input type="radio" class="rating-input" id="5_star"  value="5" v-model="newReview.score"><label for="5_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="4_star"  value="4" v-model="newReview.score"><label for="4_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="3_star"  value="3" v-model="newReview.score"><label for="3_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="2_star"  value="2" v-model="newReview.score"><label for="2_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="1_star"  value="1" v-model="newReview.score"><label for="1_star" class="rating-star"></label>
                </span>
                </div>
              </div>
              <!-- /rating_submit -->
              <div class="form-group">
                <label>吃货的评论</label>
                <textarea class="form-control" style="height: 180px;" v-model="newReview.text" placeholder="您的意见将会帮助其他吃货还有提高餐馆的质量哦"></textarea>
              </div>
              <div class="form-group">
                <label>就餐时间</label>
                <a-date-picker  @change="onChangeDate"/>
                <a-time-picker  use12-hours @change="onChangeTime" />
              </div>
              <div class="form-group">
                <label>添加图片(可选) </label>
                <div class="fileupload"><input type="file" name="fileupload" accept="image/*"></div>
              </div>
              <div class="form-group">
                <label>喜欢的菜</label>
                <Foldable_character_list :resMenu="resMenu" @selectMenuEvent="postMenuRecommend"></Foldable_character_list>
              </div>

              <div class="form-group">
                <div class="checkboxes float-left add_bottom_15 add_top_15">
                  <label class="container_check">我保证这条点评的内容是我的亲身经历及真实想法，我与此产业不存在私人或业务关系、且没有接受过来自此产业的奖励或酬劳以撰写这条点评。我了解本网站绝不容忍虚假点评的政策。
                    <input type="checkbox" value="agree" v-model="isAgree">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <P>{{isAgree}}</P>
              <a><input type="button" class="btn_1"  value="Submit review" @click="postNewReview"></a>
            </div>
          </div>
          <!-- /col -->
          <div class="col-lg-4">
            <LastView_Right></LastView_Right>
            <!-- /latest_review -->
          </div>
        </div>
        <!-- /row -->
        </form>
      </div>
      <!-- /container -->
    </main>
    <!--/main-->
    <Footer_com></Footer_com>
  </div>
</template>

<script>
    import Footer_com from "../components/Footer_com";
    import Header_WB from "../components/Header_WB";
    import LastView_Right from "../components/LastView_Right";
    import Foldable_character_list from "../components/form_component/Foldable_character_list";
    import {getLocalStore} from "../assets/storage/localstorage";
    export default {
        name: "WriteReviews",
        components: {Foldable_character_list, LastView_Right, Header_WB, Footer_com},
        data(){
          return{
            isAgree:[],
            resObj:{},
            res_id:this.$route.query.resId,
            newReview:{
                meal_time:null,
                text:null,
                score:null,
                user:null,
                restaurant:null,
                depend:null,
            },
            mealDate:"",
            mealTime:"",
            resMenu:[],
            reMenuList:[],
            recommendParams:{
              menus:null,
            }
          }
        },
        created() {
            //读取餐馆名称和地址
            let tmpThis=this;
            this.$httpM.get(this.$api.Restaurant.singleRestaurant+this.res_id,false)
            .then(function (response) {
                tmpThis.resObj=response.data;
            });
            //读取餐馆的菜单
            this.$httpM.get(this.$api.Menu.resMenu.replace("{id}",this.res_id),false)
            .then(function (response) {
                tmpThis.resMenu=response.data;
                console.log(response.data);
            })
        },
        methods:{
          //推荐菜单的方法
          postMenuRecommend(recomMenuList){
            console.log("用户选择的菜为：",recomMenuList);
            this.reMenuList=recomMenuList;
          },
          onChangeDate(date, dateString){
            //console.log(date, dateString);
            this.mealDate=dateString;
          },
          onChangeTime(time, timeString){
            //console.log(time,timeString);
            this.mealTime=timeString;
          },
          postNewReview(){
            if (this.isAgree.length<=0){
              this.$message.warning("请勾选同意条款！");
              return ;
            }
            var tmpThis=this;
            //构造评论post参数
            this.newReview.meal_time="日期："+this.mealDate+"  时间："+this.mealTime;
            this.newReview.user=JSON.parse(getLocalStore("userLogin"))['user_id'];
            this.newReview.restaurant=this.res_id;
            //构建推荐菜推荐参数

            console.log("评论：",this.newReview);
            console.log("推荐的菜：",this.reMenuList);
            //评分和评论内容不为空
            if (this.newReview.score!=null&&this.newReview.text!=null){
              //创建新的评论
              this.$httpM.post(this.$api.Review.create,this.newReview,false)
              .then(function (response) {
                tmpThis.$message.success("评论成功");
                //传参数时 不能用path传递参数
                tmpThis.$router.push({name:'restaurant',query:{id:tmpThis.res_id}});
              })
              .catch(function (err) {

              });
            }
            //更新菜单的推荐
            this.recommendParams.menus=this.reMenuList;
            if (this.reMenuList.length>0){
              this.$httpM.post(this.$api.Menu.recommendMenu,this.recommendParams,false)
              .then(function (response) {
              })
              .catch(function () {
              })
            }

          },
        }
    }
</script>

<style scoped>


</style>
