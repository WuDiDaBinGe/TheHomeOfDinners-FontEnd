<template>
    <div id="page">
		
	<Header_WB></Header_WB>
	
	<main>
        <section class="hero_single general">
            <div class="wrapper">
                <div class="container">
                    <h1>ABSA Platform Blog</h1>
                    <p>ABSA Platform helps grow your business using customer reviews</p>
                </div>
            </div>
        </section>
        <!-- /hero_single -->
        
        <div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-9">
					<div class="singlepost">
						<figure><img alt="" class="img-fluid" src="/static/img/blog-single.jpg"></figure>
						<h2>Ei pro alia placerat theophrastus</h2>
						<div class="postmeta">
							<ul>
								<li><a href="#"><i class="ti-folder"></i> Category</a></li>
								<li><a href="#"><i class="ti-calendar"></i> 23/12/2015</a></li>
								<li><a href="#"><i class="ti-user"></i> Admin</a></li>
								<li><a href="#"><i class="ti-comment"></i> (14) Comments</a></li>
							</ul>
						</div>
						<!-- /post meta -->
						<div class="post-content">
							<div class="dropcaps">
								<p>Aorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>

							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>


                        </div>
                        <div id="mainre" style="width: 400px;height:400px;margin:0 auto;"></div>

                        <div class="time-graph">
                            <canvas style="margin-top: -20px" id="time-graph-canvas" width="250" height="250"></canvas>
                        </div>
                        
                        <div class="time-graph1">
                            <canvas style="margin-top: -20px" id="time-graph-canvas1" width="250" height="250"></canvas>
                        </div>
                       

                        <p>{{ tag }}</p>
                        <p>{{ senti }}</p>
                        <p>{{ subj }}</p>
                        <p>{{ parse }}</p>
                        <p>{{ count1 }}</p>
                        <p>{{ count2 }}</p>
						<!-- /post -->
					</div>
					<!-- /single-post -->

					<div id="comments">
						<h5>Comments</h5>
						<ul>
							<li>
								<div class="avatar">
									<a href="#"><img src="/static/img/avatar1.jpg" alt="">
									</a>
								</div>
								<div class="comment_right clearfix">
									<div class="comment_info">
										By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#"><i class="icon-reply"></i></a>
									</div>
									<p>
										Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
									</p>
								</div>
								<ul class="replied-to">
									<li>
										<div class="avatar">
											<a href="#"><img src="/static/img/avatar2.jpg" alt="">
											</a>
										</div>
										<div class="comment_right clearfix">
											<div class="comment_info">
												By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#"><i class="icon-reply"></i></a>
											</div>
											<p>
												Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
											</p>
											<p>
												Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
											</p>
										</div>
										<ul class="replied-to">
											<li>
												<div class="avatar">
													<a href="#"><img src="/static/img/avatar2.jpg" alt="">
													</a>
												</div>
												<div class="comment_right clearfix">
													<div class="comment_info">
														By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#"><i class="icon-reply"></i></a>
													</div>
													<p>
														Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
													</p>
													<p>
														Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
													</p>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<div class="avatar">
									<a href="#"><img src="/static/img/avatar3.jpg" alt="">
									</a>
								</div>

								<div class="comment_right clearfix">
									<div class="comment_info">
										By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span>|</span><a href="#"><i class="icon-reply"></i></a>
									</div>
									<p>
										Cursus tellus quis magna porta adipiscin
									</p>
								</div>
							</li>
						</ul>
					</div>

					<hr>

					<h5>Leave a comment</h5>
					<div class="row">
						<div class="col-lg-4">
							<div class="form-group">
								<input type="text" name="name" id="name2" class="form-control" placeholder="Name">
							</div>
						</div>
						<div class="col-lg-4">
							<div class="form-group">
								<input type="text" name="email" id="email2" class="form-control" placeholder="Email">
							</div>
						</div>
						<div class="col-lg-4">
							<div class="form-group">
								<input type="text" name="email" id="website3" class="form-control" placeholder="Website">
							</div>
						</div>
					</div>
					<div class="form-group">
						<textarea class="form-control" name="comments" id="comments2" rows="6" placeholder="Comment"></textarea>
					</div>
					<div class="form-group">
						<button type="submit" id="submit2" class="btn_1 add_bottom_15">Submit</button>
					</div>
					
				</div>
				<!-- /col -->

				<aside class="col-lg-3">
					<div class="widget search_blog">
						<div class="form-group">
							<input type="text" name="search" id="search" class="form-control" placeholder="Search..">
							<span><input type="submit" value="Search"></span>
						</div>
					</div>
					<!-- /widget -->
					<div class="widget">
						<div class="widget-title">
							<h4>Latest Post</h4>
						</div>
						<ul class="comments-list">
							<li>
								<div class="alignleft">
									<a href="#0"><img src="/static/img/blog-5.jpg" alt=""></a>
								</div>
								<small>Category - 11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div class="alignleft">
									<a href="#0"><img src="/static/img/blog-6.jpg" alt=""></a>
								</div>
								<small>Category - 11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div class="alignleft">
									<a href="#0"><img src="/static/img/blog-4.jpg" alt=""></a>
								</div>
								<small>Category - 11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
						</ul>
					</div>
					<!-- /widget -->
					<div class="widget">
						<div class="widget-title">
							<h4>Categories</h4>
						</div>
						<ul class="cats">
							<li><a href="#">Food <span>(12)</span></a></li>
							<li><a href="#">Places to visit <span>(21)</span></a></li>
							<li><a href="#">New Places <span>(44)</span></a></li>
							<li><a href="#">Suggestions and guides <span>(31)</span></a></li>
						</ul>
					</div>
					<!-- /widget -->
					<div class="widget">
						<div class="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div class="tags">
							<a href="#">Food</a>
							<a href="#">Bars</a>
							<a href="#">Cooktails</a>
							<a href="#">Shops</a>
							<a href="#">Best Offers</a>
							<a href="#">Transports</a>
							<a href="#">Restaurants</a>
						</div>
					</div>
					<!-- /widget -->
				</aside>
				<!-- /aside -->
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
import "../../static/css/blog.css";
import Footer_com from '../components/Footer_com.vue';
import Header_WB from '../components/Header_WB.vue';
export default {
    components: { Footer_com, Header_WB },
    mounted:function(){
         // 调用函数：
        var time_canvas = document.getElementById("time-graph-canvas1"); /*获取canvas容器*/
        this.drawMain(time_canvas, 10*100, "#85d824", "#eef7e4");
        // 调用函数：
        var time_canvas2 = document.getElementById("time-graph-canvas"); /*获取canvas容器*/
        this.drawMain2(time_canvas2, 10*100, "#85d824", "#eef7e4");
        alert("sadasy_x_b");
        console.log("asdjlksam___Blog_Post___!");
    },
    methods:{
        drawMain(drawing_elem, percent, forecolor, bgcolor) {
        /*
            函数封装：
            @drawing_elem: 绘制对象
            @percent：绘制圆环百分比, 范围[0, n]
            @forecolor: 绘制圆环的前景色，颜色代码
            @bgcolor: 绘制圆环的背景色，颜色代码
        */
        var context = drawing_elem.getContext("2d");
        var center_x = drawing_elem.width / 2;
        var center_y = drawing_elem.height / 2;
        var rad = Math.PI * 2 / 133; //Math.PI = 180°,此处是吧360°分成1500份
        var speed = 0;

        // 绘制背景圆圈
        function backgroundCircle() {
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.beginPath();
            context.lineWidth = 8; //设置线宽
            var radius = center_x - context.lineWidth; //圆角
            context.lineCap = "round";
            context.strokeStyle = bgcolor;
            context.arc(center_x, center_y, radius, Math.PI / 1.3333, Math.PI / 4, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，结束角度，逆时针还是顺时针绘图：False = 顺时针、true = 逆时针)。
            context.stroke();
            context.closePath();
            context.restore();
        }

        // 绘制运动圆环
        function foregroundCircle(n) {
            context.save();
            context.strokeStyle = forecolor;
            context.lineWidth = 8;
            context.lineCap = "round";
            var radius = center_x - context.lineWidth;
            context.beginPath();
            context.arc(center_x, center_y, radius, Math.PI / 1.3333, Math.PI / 1.3333 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            context.stroke();
            context.closePath();
            context.restore();
        }

        //绘制文字
        function text(n) {
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.fillStyle = forecolor;
            context.textAlign = 'center';
            var font_size = 40;
            context.font = font_size + "px Helvetica";
            context.fillText(n/100, center_x, center_y + font_size / 2); // 在画布上写文本fillText(内容，x坐标，y坐标)，
            context.restore();
        }

        //执行动画
        (function drawFrame() {
            window.requestAnimationFrame(drawFrame);
            context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
            backgroundCircle();
            text(speed);
            foregroundCircle(speed);
            if (speed >= percent) return;
            speed += 1; //文字变化速度
        }())
        },

        drawMain2(drawing_elem, percent, forecolor, bgcolor) {
        /*
            函数封装：
            @drawing_elem: 绘制对象
            @percent：绘制圆环百分比, 范围[0, n]
            @forecolor: 绘制圆环的前景色，颜色代码
            @bgcolor: 绘制圆环的背景色，颜色代码
        */
        var context = drawing_elem.getContext("2d");
        var center_x = drawing_elem.width / 2;
        var center_y = drawing_elem.height / 2;
        var rad = Math.PI * 2 / 133; //Math.PI = 180°,此处是吧360°分成1500份
        var speed = 0;

        // 绘制背景圆圈
        function backgroundCircle() {
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.beginPath();
            context.lineWidth = 8; //设置线宽
            var radius = center_x - context.lineWidth; //圆角
            context.lineCap = "round";
            context.strokeStyle = bgcolor;
            context.arc(center_x, center_y, radius, Math.PI / 1.3333, Math.PI / 4, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，结束角度，逆时针还是顺时针绘图：False = 顺时针、true = 逆时针)。
            context.stroke();
            context.closePath();
            context.restore();
        }

        // 绘制运动圆环
        function foregroundCircle(n) {
            context.save();
            context.strokeStyle = forecolor;
            context.lineWidth = 8;
            context.lineCap = "round";
            var radius = center_x - context.lineWidth;
            context.beginPath();
            context.arc(center_x, center_y, radius, Math.PI / 1.3333, Math.PI / 1.3333 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            context.stroke();
            context.closePath();
            context.restore();
        }

        //绘制文字
        function text(n) {
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.fillStyle = forecolor;
            context.textAlign = 'center';
            var font_size = 40;
            context.font = font_size + "px Helvetica";
            context.fillText(n/100, center_x, center_y + font_size / 2); // 在画布上写文本fillText(内容，x坐标，y坐标)，
            context.restore();
        }

        //执行动画
        (function drawFrame() {
            window.requestAnimationFrame(drawFrame);
            context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
            backgroundCircle();
            text(speed);
            foregroundCircle(speed);
            if (speed >= percent) return;
            speed += 1; //文字变化速度
        }());
        }
    },
    
    
}
</script>

<style scoped>
.time-graph {
    padding-top: 20px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}

#time-graph-canvas {
    width: 200px;
    height: 200px;
}
.time-graph1 {
    padding-top: 20px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}

#time-graph-canvas1 {
    width: 200px;
    height: 200px;
}
</style>
