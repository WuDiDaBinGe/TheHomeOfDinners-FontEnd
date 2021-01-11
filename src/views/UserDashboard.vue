<template>
    <div id="page">

	<Header_WB></Header_WB>
	<!-- /header -->

	<main class="margin_main_container">
		<div class="user_summary">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<figure>
								<img src="" alt="">
							</figure>
							<h1>-- name --</h1>
							<span>--profile--</span>
						</div>
						<div class="col-md-6">
							<ul>
								<li>
									<strong>renums</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Reviews written by you"><i class="icon_star"></i> Reviews</a>
								</li>
								<li>
									<strong>passnums</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Number of people who have read your reviews"><i class="icon-ok"></i> Formal</a>
								</li>
								<li>
									<strong>notpassnums</strong>
									<a href="#0" class="tooltips" data-toggle="tooltip" data-placement="bottom" title="Number of people who found your review useful"><i class="icon-cancel"></i> Informal</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- /container -->
			</div>
		</div>
		<!-- /user_summary -->
		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">


          <form autocomplete="off" action="/changereview" method="post" id="changere">
            <div class="review_card">
						<div class="row">
							<div class="col-md-2 user_info" >
                <div style="text-align: center"><figure><img src=" re.avatar " alt="" style="display: inline-block"></figure></div>
                <div style="text-align: center"><h5 style="display: inline-block">re.name</h5></div>

							</div>
              <input name="id" id="id" value=" re.id " style="display: none">
              <input name="cho" id="cho" value="0" style="display: none">
              <textarea id="text" name="text" style="display: none"></textarea>
							<div class="col-md-10 review_content">
								<div class="clearfix add_bottom_15">
									<span class="rating"><i ></i><i ></i><i ></i><i ></i><i ></i><em>re.score/5.00</em></span>
									<em>Published: re.reviewtime</em>
								</div>
                <div class="form-group">
								  <input class="form-control" type="text" name="title" disabled="true"  value="re.title">
                </div>
                <div class="form-group">
                  <textarea class="form-control" style="height: 180px;" id="textorire.id" name="textori" >re.text</textarea>
                </div>
                  <p>Mealtime: re.mealtime </p>
                  <p>Restaurant: re.rest </p>
                  <p>re.state </p>
								<ul>

									<li><a href="#0" class="btn_delete" onclick="document.getElementById('cho').value='1';document.getElementById('id').value='--re.id--';document.getElementById('changere').submit();"><i class="icon-trash"></i>Delete</a></li>
									<li><a href="#0" onclick="document.getElementById('cho').value='0';document.getElementById('text').value=document.getElementById('textori-- re.id --').value;document.getElementById('id').value='--re.id--';document.getElementById('changere').submit();"><i class="icon-edit-3"></i> Edit</a></li>

								</ul>
							</div>
						</div>
						<!-- /row -->
					</div>
          </form>


				</div>
				<!-- /col -->
				<div class="col-lg-4">
					<div class="box_general general_info">
						<h3>Edit a review<i class="pe-7s-help1"></i></h3>
						<p>How to edit or delete your review...<br><strong><a href="{% url 'user-dashboard' %}">Read more</a></strong></p>
						<hr>
						<h3>Post a review<i class="pe-7s-help1"></i></h3>
						<p>Show your real thoughts...<br><strong><a href="{% url 'write-review' %}">Read more</a></strong></p>
						<hr>
						<h3>Approve a review<i class="pe-7s-help1"></i></h3>
						<p>To know more about others...<br><strong><a href="{% url 'category-companies-listings-filterstop-user' %}?name=">Read more</a></strong></p>
						</div>
				</div>
			</div>
			<!-- /row -->
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
    import Footer_com from "../components/Footer_com"
    export default {
  		components: { Header_WB,Footer_com },
        name: "testHttp",
        data(){
          return{

          }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
