<template>
    <div id="page">
        <Header_WB></Header_WB>
        <main class="margin_main_container">
		<div class="container margin_60">
			 <div class="row justify-content-center">
				<div class="col-md-5">
					<div id="confirm">
						<div class="icon icon--order-success svg add_bottom_15">
							<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
								<g fill="none" stroke="#8EC343" stroke-width="2">
									<circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
									<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
								</g>
							</svg>
						</div>
					<h2>操作成功！</h2>
					<p>感谢您的使用!</p>
					</div>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->

		<div class="bg_color_1">
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-4">
						<a href="/faq" class="boxed_list">
							<i class="pe-7s-help2"></i>
							<h4>需要帮助?</h4>
							<p>更好的了解如何使用食客之家。</p>
						</a>
					</div>
					<div class="col-lg-4">
						<a href="/faq" class="boxed_list">
							<i class="pe-7s-flag"></i>
							<h4>举报</h4>
							<p>举报不符合平台规则的行为。</p>
						</a>
					</div>
					<div class="col-lg-4">
						<a href="/faq" class="boxed_list">
							<i class="pe-7s-note2"></i>
							<h4>条款和协议</h4>
							<p>条款和协议说明了商家和用户的权利以及遵守的规则。</p>
						</a>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
	</main>
	<!--/main-->

        <Footer_com></Footer_com>
    </div>
</template>

<script>
import Header_WB from "../components/Header_WB";
import Footer_com from "../components/Footer_com"
export default {
    components:{Header_WB,Footer_com},
}
</script>

<style scoped>

</style>
