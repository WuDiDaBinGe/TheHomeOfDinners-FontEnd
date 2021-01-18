<template>
  <footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<a data-toggle="collapse" data-target="#collapse_ft_1" aria-expanded="false" aria-controls="collapse_ft_1" class="collapse_bt_mobile">
						<h3>快速链接</h3>
						<div class="circle-plus closed">
							<div class="horizontal"></div>
							<div class="vertical"></div>
						</div>
					</a>
					<div class="collapse show" id="collapse_ft_1">
						<ul class="links">
							<li><a href="#0">关于我们</a></li>
							<li><a href="/faq">平台规则</a></li>
							<li><a href="/faq">帮助</a></li>
							<li><a href="/userinfo">我的账户</a></li>
							<li><a href="/Register">创建账户</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<a data-toggle="collapse" data-target="#collapse_ft_2" aria-expanded="false" aria-controls="collapse_ft_2" class="collapse_bt_mobile">
						<h3>餐馆种类</h3>
						<div class="circle-plus closed">
							<div class="horizontal"></div>
							<div class="vertical"></div>
						</div>
					</a>
					<div class="collapse show" id="collapse_ft_2">
						<ul class="links">
							<li><a href="#0">小吃</a></li>
							<li><a href="#0">火锅</a></li>
							<li><a href="#0">西餐</a></li>
							<li><a href="#0">自助餐</a></li>
							<li><a href="#0">面粉馆</a></li>
							<li><a href="#0">我全都要！</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<a data-toggle="collapse" data-target="#collapse_ft_3" aria-expanded="false" aria-controls="collapse_ft_3" class="collapse_bt_mobile">
						<h3>欢迎您的意见</h3>
						<div class="circle-plus closed">
							<div class="horizontal"></div>
							<div class="vertical"></div>
						</div>
					</a>
					<div class="collapse show" id="collapse_ft_3">
						<ul class="contacts">
							<li><i class="ti-home"></i>国防科技大学软件工程方法与实践11组<br>中国 - 长沙</li>
							<li><i class="ti-headphone-alt"></i>+0731 777 7777</li>
							<li><i class="ti-email"></i><a href="https://www.nudt.edu.cn/">ruangongxiaozu11@nudt.com</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<a data-toggle="collapse" data-target="#collapse_ft_4" aria-expanded="false" aria-controls="collapse_ft_4" class="collapse_bt_mobile">
						<div class="circle-plus closed">
							<div class="horizontal"></div>
							<div class="vertical"></div>
						</div>
						<h3>联系我们</h3>
					</a>
					<div class="collapse show" id="collapse_ft_4">
						<div id="newsletter">
							<div id="message-newsletter"></div>
							<form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
								<div class="form-group">
									<input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="你的邮箱">
									<input type="submit" value="提交" id="submit-newsletter">
								</div>
							</form>
						</div>
						<div class="follow_us">
							<h5>这里也可以找到我们！</h5>
							<ul>
								<li><a href="http://www.facebook.com"><i class="ti-facebook"></i></a></li>
								<li><a href="http://www.twitter.com"><i class="ti-twitter-alt"></i></a></li>
								<li><a href="http://www.google.com"><i class="ti-google"></i></a></li>
								<li><a href="http://www.pinterest.com"><i class="ti-pinterest"></i></a></li>
								<li><a href="http://www.ti-instagram.com"><i class="ti-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- /row-->
			<hr>
			<div class="row">
				<div class="col-lg-6">
					<ul id="footer-selector">
						<li>
							<div class="styled-select" id="lang-selector">
								<select>
                  <option value="Chinese" selected>中文</option>
									<option value="English">English</option>
									<option value="French">francés</option>
									<option value="Spanish">Español</option>
									<option value="Russian">русский</option>
								</select>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-lg-6">
					<ul id="additional_links">
						<li><a href="/faq">条款</a></li>
						<li><a href="/faq">隐私</a></li>
						<li><span>© 2021 食客之家</span></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	<!--/footer-->


	<!-- page -->
</template>

<script>
    export default {
        name: "Footer_com"
    }
</script>

<style scoped>

</style>
