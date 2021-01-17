<template xmlns="http://www.w3.org/1999/html">
  <div id="page">

  <Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="container ">
      <form>
			<div class="row">
				<div class="col-lg-8">
					<div class="box_general write_review">
						<h1>创建餐馆</h1>
						<div class="rating_submit">
							<div class="form-group">

							</div>
						</div>
						<!-- /rating_submit -->
						<div class="form-group">
              <label>餐馆名称：</label><span class="text-danger">*</span>
							<input class="form-control" type="text"  v-model="new_restaurant.res_name">
						</div>
             <div class="form-group" >
             <label>餐馆类型：</label><span class="text-danger">*</span>
               <div class="col-lg-4">
									<select class="wide nice-select" name="find2" v-model="new_restaurant.res_tag">
                    <option value="请选择">请选择餐馆类型</option>
										<option v-for="item in tags_list" v-bind:value="item">{{item}}</option>
                  </select>
               </div>
                </div>
            <br></br>
            <div class="form-group">
							<label>地址：</label><span class="text-danger">*</span>
              <div class="col-lg-4">

									<select class="wide nice-select" name="find2" v-model="new_restaurant.res_region_tag">
                    <option value="请选择">请选择地区</option>
										<option v-for="item in regions_list" v-bind:value="item">{{item}}</option>
                  </select>
               </div>
							<input class="form-control" type="text"  placeholder="餐馆的具体地点" v-model="new_restaurant.res_address">
						</div>
            <div class="form-group">
							<label>加一点餐馆和菜品的图片(可选)</label>
							<div class="fileupload"><input type="file"  name="imgLocal" accept="image/*" @change="triggerFile($event)"></div>
						</div>
            <div class="form-group">
              <label>营业时间：</label>
              <input class="form-control" type="text" v-model="new_restaurant.business_time"/>
            </div>
						<div class="form-group">
              <label>联系电话：</label><span class="text-danger">*</span>
              <input class="form-control"  type="phone" v-model="new_restaurant.mobile">
						</div>
            <div id="pass-info" class="cle  arfix"></div>
						<a><input type="button" class="btn_1" @click="submitRes" value="注册餐馆"></a>
					</div>
				</div>
				<!-- /col -->
				<div class="col-lg-4">
          <!--<LastView_Right></LastView_Right> -->
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
            tags_list:["1","2","3"],
            regions_list:[],
            new_restaurant:{
              res_name:"",
              res_region_tag:"请选择",
              res_address:"",
              res_tag:"请选择",
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
            var reg = /^[a-zA-Z0-9]{5,20}$/;
            var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
            var restaurantInfo=this.new_restaurant;
            if (!reg.test(restaurantInfo.res_name)||!reg.test(restaurantInfo.res_address)){
              this.$message.error("餐馆名称和地址必须5-20字符！");
              return;
            }
            else if (!phonereg.test(restaurantInfo.mobile)){
              this.$message.error("填写正确的手机号！");
              return;
            }
            if(restaurantInfo.res_tag==="请选择"){
              this.$message.error("请选择餐馆类型！");
              return;
            }
             if(restaurantInfo.res_region_tag==="请选择"){
              this.$message.error("请选择地区！");
              return;
            }
            let res_tag_id= this.tags_list.findIndex(item => item===restaurantInfo.res_tag);
             let res_region_id = this.regions_list.findIndex(item => item===restaurantInfo.res_region_tag);
            this.new_restaurant.owner=JSON.parse(getLocalStore("userLogin"))['user_id'];
            let param=new FormData();
            param.append("res_name",this.new_restaurant.res_name);           //向对象中添加数据
            param.append("res_address",this.new_restaurant.res_address);
            param.append("picture",this.new_restaurant.picture,this.new_restaurant.picture.name);
            param.append("business_time",this.new_restaurant.business_time);
            param.append("mobile",this.new_restaurant.mobile);
            param.append("owner",this.new_restaurant.owner);
            param.append("tag1",res_tag_id);
            param.append("tag2",res_region_id);
            this.$httpM.post(this.$api.Restaurant.create,param,false)
            .then(function (response) {
              console.log("response:",response);
            })
            .catch(function (err) {
              console.log("err:",err);
            })
          },
          getTagsList(){
            var tmpThis=this;
            this.$httpM.get(this.$api.Tag.lists,false)
            .then(function (response) {

                tmpThis.tags_list=response.data['种类'];
                tmpThis.regions_list=response.data['地区'];
            })
            .catch(function (err) {
                console.log(err);
            })
          }
        },
        components: {Footer_com, LastView_Right, Header_WB},
      created() {
          this.getTagsList()
      }
    }
</script>

<style scoped>

</style>
