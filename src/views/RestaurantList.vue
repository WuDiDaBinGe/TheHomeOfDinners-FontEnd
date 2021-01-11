<template>
  <div id="page">

	<Header_WB></Header_WB>

	<main>
		<div id="results">
		   <div class="container">
			   <div class="row justify-content-between">
				   <div class="col-lg-3 col-md-4 col-10">

				   </div>
				   <div class="col-xl-5 col-md-6 col-2">
					   <a href="#0" class="search_mob btn_search_mobile"></a> <!-- /open search panel -->
						<div class="row no-gutters custom-search-input-2 inner">
							<div class="col-lg-7">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="Search reviews for a company">
									<i class="icon_search"></i>
								</div>
							</div>
							<div class="col-lg-4">
								<select class="wide nice-select">
									<option v-for="item in categories_list">{{item}}</option>
								</select>
							</div>
							<div class="col-xl-1 col-lg-1">
								<input type="submit" value="Search">
							</div>
						</div>
				   </div>
			   </div>
			   <!-- /row -->
				<div class="search_mob_wp">
					<div class="custom-search-input-2">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Search reviews...">
							<i class="icon_search"></i>
						</div>
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Where">
							<i class="icon_pin_alt"></i>
						</div>
						<select class="wide">
							<option v-for="item in categories_list">{{item}}</option>
						</select>
						<input type="submit" value="Search">
					</div>
				</div>
				<!-- /search_mobile -->
		   </div>
		   <!-- /container -->
	   </div>
	   <!-- /results -->

		<div class="filters_listing sticky_horizontal">
			<div class="container">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" class="selected">
							<label for="all">All</label>
							<input type="radio" id="high" name="listing_filter" value="high" data-filter=".high">
							<label for="high">High rated</label>
							<input type="radio" id="low" name="listing_filter" value="low" data-filter=".low">
							<label for="low">Low rated</label>
						</div>
					</li>
					<li><a class="btn_filt" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
				</ul>
			</div>
			<!-- /container -->
		</div>
		<!-- /filters -->
    <!-- Filter -->
		<div class="collapse" id="filters">
			<div class="container margin_30_5">
				<div class="row">
					<div class="col-md-4">
						<h6>分类</h6>
						<ul>
							<li v-for="cate in categories_list">
								  <label class="container_check">{{cate}} <small>67</small>
								  <input type="radio" name="category" v-model="selectedCategory" :value="cate" @change="getKey">
								  <span class="checkmark" ></span>
								</label>
							</li>

						</ul>
					</div>

					<div class="col-md-4">
						<h6>地区</h6>
						<ul>
							<li v-for="region in region_list" >
								<label class="container_check">{{region}} <small>12</small>
								  <input type="radio" name="location" v-model="selectedRegion" :value="region" @change="getKey">
								  <span class="checkmark" ></span>
								</label>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<div class="add_bottom_30">
						<h6>Distance</h6>
							<div class="distance"> Radius around selected destination <span></span> km</div>
							<input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal">
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
		</div>
		<!-- /Filters -->

		<div class="container margin_60_35">

			<div class="isotope-wrapper">

				<restaurant_item :key="selectKey" :selectTag="selectKey" :parentName="this.myName"></restaurant_item>

			</div>
			<!-- /isotope-wrapper
			<p class="text-center"><a href="#0" class="btn_1 rounded add_top_15">Load more</a></p>
			 -->



		</div>
		<!-- /container -->

	</main>
	<!--/main-->

	<Footer_com></Footer_com>
	</div>
	<!-- page -->
</template>

<script>
	  import restaurant_item from "../components/List_Components/restaurant_item"
    import Header_WB from "../components/Header_WB";
    import Footer_com from "../components/Footer_com";
    import Pagination from "../components/List_Components/Pagination";
    import {getLocalStore} from "../assets/storage/localstorage";
    export default {
        name: "RestaurantList",
        data(){
          return{
            categories_list:[],
            region_list:[],
            selectedCategory:"",
            selectedRegion:"",
            selectKey:"",
            myName:"RestaurantList"
          }
        },
        components: {Footer_com, Header_WB,Pagination,restaurant_item},

        created() {
          this.getTagsList();

        },
        methods:{
          getTagsList(){
            var tagsList=JSON.parse(getLocalStore("tagsList"));
            this.categories_list=tagsList['种类'];
            this.region_list=tagsList['地区'];
          },
          getKey(){

            if (this.selectedCategory===""&&this.selectedRegion===""){
              this.selectKey="";
            }
            else if (this.selectedCategory===""&&this.selectedRegion!=="") {
              this.selectKey="l"+this.selectedRegion;
            }
            else {
              this.selectKey="c"+this.selectedCategory+"l"+this.selectedRegion;
            }
            console.log(this.selectKey);
          }
        }

    }
</script>

<style scoped>

</style>
