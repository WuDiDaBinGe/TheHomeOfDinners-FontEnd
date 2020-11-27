<template>
  <div id="register_bg">
  <div id="register">
		<aside>
			<figure>
				<a href="{% url 'index' %}"><img src="../../static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></a>
			</figure>

      <div class="divider"><span>Register</span></div>
			<form  enctype="multipart/form-data">
				<div class="form-group">
					<input class="form-control" type="text" placeholder="Name" v-model="peopleInfo.name" @blur="verifyName">
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<input class="form-control"  type="phone" placeholder="Phonenumber" v-model="peopleInfo.phonenumber" @blur="verifyPhone">
					<i class="icon-phone"></i>
				</div>
				<div class="form-group">
					<input class="form-control" type="password"  placeholder="Password" v-model="peopleInfo.pwd" @blur="verifyPwd">
					<i class="icon_lock_alt"></i>
				</div>
				<div class="form-group">
					<input class="form-control" type="password"  placeholder="Confirm Password" v-model="peopleInfo.pwd2" @blur="verifyPwd2">
					<i class="icon_lock_alt"></i>
				</div>
        <div class="form-group" >
					<input class="form-control" type="file"  @change="triggerFile($event)">
          <i class="icon-picture-2"></i>
				</div>
        <div class="form-group">
					<select class="form-control"  style="padding: 0 10%;" v-model="peopleInfo.type">
            <option value="User">用户</option>
            <option value="Merchant">商家</option>
          </select>
          <i class="ti-user"></i>
				</div>
        <div class="form-group row">
          <div class="col-7">
            <input class="form-control" style="padding-left: 10px;" type="text" placeholder="Verification code" v-model="verifyCode">
          </div>
          <div class="col-5">
            <button type="button" class="btn_vrify form-control" @click="getCode" v-bind:disabled="btn_code.codeDisabled">{{btn_code.codeMsg}}</button>
          </div>
				</div>

				<div id="pass-info" v-bind:class="clearfix" v-show="err.errflag">{{err.errinfo}}</div>
				<input type="submit" id="reg" class="btn_1 rounded full-width" value="现在注册!">
				<div class="text-center add_top_10">已有帐号? <strong><a href="{% url 'login' %}">登录</a></strong></div>
      </form>
      <CopyRight></CopyRight>
		</aside>
	</div>
  </div>
</template>



<script>
    import CopyRight from "../components/CopyRight"
    export default {
      name: "register",
      components: {CopyRight},
      data(){
          return{
            peopleInfo:{
              name:"",
              phonenumber:"",
              pwd:"",
              pwd2:"",
              photofile:"",
              type:"",
            },
            verifyCode:"",
            err:{
              errflag:false,
              errinfo:"",
            },
            clearfix:"",
            btn_code:{
              // 是否禁用按钮
              codeDisabled: true,
              // 倒计时秒数
              countdown: 60,
              // 按钮上的文字
              codeMsg: '获取验证码',
              // 定时器
              timer: null
            }
          }
        },
        methods: {
          triggerFile(event) {
            console.log(event.target.files)
          },
          verifyName() {
            console.log(this.peopleInfo.name)
            var people = this.peopleInfo;
            if (people.name.replace(/(^\s*)|(\s*$)/g, "") == '') {
              this.err.errflag = true;
              this.err.errinfo = "名字不能为空，请输入名字";
              this.clearfix = "weakpass";

            } else {
              this.err.errflag = false;
              this.err.errinfo = "";
              this.clearfix = "";
            }
          },
          verifyPhone() {
            var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (!phonereg.test(this.peopleInfo.phonenumber)) {
              this.err.errflag = true;
              this.err.errinfo = "输入正确的手机号码";
              this.clearfix = "weakpass";
            } else {
              this.err.errflag = true;
              this.err.errinfo = "";
              this.clearfix = "";
              //修改验证码按钮
              this.btn_code.codeDisabled=false;
            }
          },
          verifyPwd() {
            //Must contain 5 characters or more
            var WeakPass = /(?=.{5,}).*/;
            //Must contain lower case letters and at least one digit.
            var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
            //Must contain at least one upper case letter, one lower case letter and one digit.
            var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
            if (!WeakPass.test(this.peopleInfo.pwd)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Very Weak! (输入大于5个字符)";
              this.clearfix = "weakpass";
            } else if (!MediumPass.test(this.peopleInfo.pwd)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Still Weak! (输入数字组成更好的密码)";
              this.clearfix = "stillweakpass";
            } else if (!StrongPass.test(this.peopleInfo.pwd)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Good! (输入大写字母组成更强的密码)";
              this.clearfix = "goodpass";
            } else {
              this.err.errflag = false;
              this.err.errinfo = "";
              this.clearfix = "";
            }

          },
          verifyPwd2() {
            if (this.peopleInfo.pwd != this.peopleInfo.pwd2) {
              this.err.errflag = true;
              this.err.errinfo = "密码两次不相同";
              this.clearfix = "weakpass";
            } else {
              this.err.errflag = true;
              this.err.errinfo = "密码相同";
              this.clearfix = "goodpass";
            }
          },
          timing_60s() {
            // 验证码60秒倒计时
            if (!this.btn_code.timer) {
              this.btn_code.timer = setInterval(() => {
                if (this.btn_code.countdown > 0 && this.btn_code.countdown <= 60) {
                  this.btn_code.countdown--;
                  if (this.btn_code.countdown !== 0) {
                    this.btn_code.codeMsg = "重新发送(" + this.btn_code.countdown + ")";
                  } else {
                    clearInterval(this.btn_code.timer);
                    this.btn_code.codeMsg = "获取验证码";
                    this.btn_code.countdown = 60;
                    this.btn_code.timer = null;
                    this.btn_code.codeDisabled = false;
                  }
                }
              }, 1000)}
          },
          getCode() {
            if(this.peopleInfo.phonenumber!=="" && this.err.errflag){
              this.timing_60s();
            }
            else{
              alert("请输入正确的手机号后，再发送验证码！")
              this.btn_code.codeDisabled=true;
            }
          }

        }
    }
</script>

<style scoped>

  #register aside form .form-group input{
    padding-left: 40px;
  }
  .btn_vrify{
    background: #3578fa;
    color: white;
  }



</style>
