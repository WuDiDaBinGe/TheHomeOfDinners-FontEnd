<template>
  <div id="page">

  <Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="container margin_60_35">
      <form>
			<div class="row">
				<div class="col-lg-8">
					<div class="box_general write_review">
						<h1>Create your restaurant!</h1>
						<div class="rating_submit">
							<div class="form-group">

							</div>
						</div>
						<!-- /rating_submit -->
						<div class="form-group">
              <label>Name of your restaurant</label><span class="text-danger">*</span>
							<input class="form-control" type="text"  v-model="new_restaurant.res_name">
						</div>
            <div class="form-group">
							<label>Address</label><span class="text-danger">*</span>
							<input class="form-control" type="text"  placeholder="Where is your restaurant?" v-model="new_restaurant.res_address">
						</div>
            <div class="form-group">
							<label>Add your photo (optional)</label>
							<div class="fileupload"><input type="file"  name="imgLocal" accept="image/*" @change="triggerFile($event)"></div>
						</div>
            <div class="form-group">
              <label>营业时间</label>
              <input class="form-control" type="text" v-model="new_restaurant.business_time"/>
            </div>
						<div class="form-group">
              <label>联系电话：</label><span class="text-danger">*</span>
              <input class="form-control"  type="phone" v-model="new_restaurant.mobile">
						</div>
            <div id="pass-info" class="clearfix"></div>
						<a><input type="button" class="btn_1" @click="submitRes" value="Submit restaurant"></a>
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
	<!-- page -->
</template>

<script>
    import Header_WB from "../components/Header_WB";
    import LastView_Right from "../components/LastView_Right";
    import Footer_com from "../components/Footer_com";
    import {getLocalStore} from "../assets/storage/localstorage";
    export default {
        name: "New_Restaurant",
        data(){
          return{
            new_restaurant:{
              res_name:"",
              res_address:"",
              picture:null,
              business_time:null,
              mobile:"",
              owner:"",
            }
        }},
        methods: {
          triggerFile(event) {
            this.new_restaurant.picture=event.target.files[0];
          },
          submitRes(){
            this.new_restaurant.owner=JSON.parse(getLocalStore("userLogin"))['user_id'];
            let param=new FormData();
            param.append("res_name",this.new_restaurant.res_name);           //向对象中添加数据
            param.append("res_address",this.new_restaurant.res_address);
            param.append("picture",this.new_restaurant.picture,this.new_restaurant.picture.name);
            param.append("business_time",this.new_restaurant.business_time);
            param.append("mobile",this.new_restaurant.mobile);
            param.append("owner",this.new_restaurant.owner);
            this.$httpM.post(this.$api.Restaurant.create,param,false)
            .then(function (response) {
              console.log("response:",response);
            })
            .catch(function (err) {
              console.log("err:",err);
            })
          }

        },
        components: {Footer_com, LastView_Right, Header_WB}
    }
</script>

<style scoped>

</style>
