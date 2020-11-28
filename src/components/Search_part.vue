<template>
  <section class="hero_single version_3">
			<div class="wrapper">
				<div class="container">
					<h3>Every Review is an Experience!</h3>
					<p>Check Ratings of Businesses, Read Reviews &amp; Buy</p>
					<div class="row justify-content-center">
						<div class="col-lg-9">
              <form autocomplete="off" action="/category_guest" method="post" enctype="multipart/form-data">

							<div class="row no-gutters custom-search-input-2">
								<div class="col-lg-7">
									<div class="form-group">
										<input class="form-control" type="text" name="find1" placeholder="What are you looking for...">
										<i class="icon_search"></i>
									</div>
								</div>

								<div class="col-lg-3">

									<select class="wide" name="find2">
										<option value="All">All Categories</option>
										<option value="Lebanese">Lebanese</option>
										<option value="Cafe">Cafe</option>
										<option value="Bar">Bar</option>
										<option value="Pizza">Pizza</option>
										<option value="Seafood">Seafood</option>
										<option value="Roast">Roast</option>
                    <option value="Spaghetti">Spaghetti</option>
										<option value="Dessert">Dessert</option>
									</select>
								</div>

                <div class="col-lg-2">
									<input type="submit" value="Search">
								</div>
							</div>
							<!-- /row -->
						</form>
						</div>
					</div>
				</div>
			</div>
  </section>
</template>

<script>
    export default {
        name: "Search_part"
    }
</script>

<style scoped>

</style>
