<template>
  <div id="page">
    <Header_WB></Header_WB>
    <main class="margin_main_container">
      <div class="container margin_60_35">
        <form autocomplete="off" action="/writereview" method="post" enctype="multipart/form-data">
        <div class="row">
          <div class="col-lg-8">
            <div class="box_general write_review">
              <h1>Write a review of {{res_name}}</h1>
              <div class="rating_submit">
                <div class="form-group">
                <label class="d-block">Overall rating</label>
                <span class="rating">
                  <input type="radio" class="rating-input" id="5_star" name="rating-input" value="5 Stars"><label for="5_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="4_star" name="rating-input" value="4 Stars"><label for="4_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="3_star" name="rating-input" value="3 Stars"><label for="3_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="2_star" name="rating-input" value="2 Stars"><label for="2_star" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="1_star" name="rating-input" value="1 Star"><label for="1_star" class="rating-star"></label>
                </span>


                </div>
              </div>
              <!-- /rating_submit -->
              <div class="form-group">
                <label>Title of your review</label>
                <input class="form-control" type="text" name="title" placeholder="If you could say it in one sentence, what would you say?">
              </div>
              <div class="form-group">
                <label>Your review</label>
                <textarea class="form-control" style="height: 180px;" name="text" placeholder="Write your review to help others learn about this online business"></textarea>
              </div>
              <div class="form-group">
                <label>Mealtime</label>
                <input class="form-control" type="text" name="mealtime" placeholder="When did you come here for dinner?">
              </div>
              <div class="form-group">
    							<label>Restaurant</label>
    							<input class="form-control" type="text" name="rest" placeholder="If you could say it in one sentence, what would you say?">
    						</div>
              <div class="form-group">
                <label>Add your photo (optional)</label>
                <div class="fileupload"><input type="file" name="fileupload" accept="image/*"></div>
              </div>
              <div class="form-group">
                <div class="checkboxes float-left add_bottom_15 add_top_15">
                  <label class="container_check">我保证这条点评的内容是我的亲身经历及真实想法，我与此产业不存在私人或业务关系、且没有接受过来自此产业的奖励或酬劳以撰写这条点评。我了解本网站绝不容忍虚假点评的政策。
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <a><input type="submit" class="btn_1" id="submit_re" value="Submit review"></a>
            </div>
          </div>
          <!-- /col -->
          <div class="col-lg-4">
            <LastView_Right :res_name="res_name"></LastView_Right>
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
    export default {
        name: "WriteReviews",
        components: {LastView_Right, Header_WB, Footer_com},
        data(){
          return{
            res_name:"601",
          }
        }
    }
</script>

<style scoped>

</style>
