<template>
  <section class="hero_single version_3">
			<div class="wrapper">
				<div class="container">
					<h3>Every Review is an Experience!</h3>
					<p>Check Ratings of Businesses, Read Reviews &amp; Buy</p>
					<div class="row justify-content-center">
						<div class="col-lg-9">


							<div class="row no-gutters custom-search-input-2">

								<div class="col-lg-7">
									<div class="form-group">
										<input class="form-control" type="text" name="find1" placeholder="What are you looking for...">
										<i class="icon_search"></i>
									</div>
								</div>

                <div class="col-lg-3">
									<select class="wide nice-select" name="find2">
										<option v-for="item in categories_list" v-bind:value="item">{{item}}</option>
									</select>
								</div>


                <div class="col-lg-2">
									<input type="submit" value="Search">
								</div>


							</div>
							<!-- /row -->

						</div>
					</div>
				</div>
			</div>
  </section>
</template>

<script>
    export default {
        name: "Search_part",
        data(){
          return{
            categories_list:["All Categories","Lebanese","Cafe","Bar","Pizza","Seafood","Roast","Spaghetti","Dessert"]
          }
        }
    }
</script>

<style scoped>

</style>
