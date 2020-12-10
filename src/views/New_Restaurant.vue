<template>
  <div id="page">

  <Header_WB></Header_WB>

	<main class="margin_main_container">
		<div class="container margin_60_35">
      <form autocomplete="off" action="/writerest" method="post" enctype="multipart/form-data">

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
							<label>Name of your restaurant</label>
							<input class="form-control" type="text"  id="name" v-model="new_restaurant.name">
						</div>
						<div class="form-group">
							<label>Menu</label>
							<textarea class="form-control" style="height: 180px;"  id="food" placeholder="Write your menu to introduce your business"></textarea>
						</div>
            <div class="form-group">
							<label>Address</label>
							<input class="form-control" type="text"  id="address" placeholder="Where is your restaurant?" v-model="new_restaurant.address">
						</div>
						<div class="form-group">
							<label>Add your photo (optional)</label>
							<div class="fileupload"><input type="file"  id="photo" accept="image/*" @change="triggerFile($event)"></div>
						</div>
						<div class="form-group">
						</div>
            <div id="pass-info" class="clearfix"></div>
						<a><input type="submit" class="btn_1" id="subrest" value="Submit restaurant"></a>
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
    export default {
        name: "New_Restaurant",
        data(){
          return{
            new_restaurant:{
              name:"",
              address:"",
              menu:"",
              res_photo:"",
            }
        }},
        methods: {
          triggerFile(event) {
            console.log(event.target.files)
          },
        },
        components: {Footer_com, LastView_Right, Header_WB}
    }
</script>

<style scoped>

</style>
