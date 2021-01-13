<template>
  <div id="register_bg">
  <div id="register">
		<aside>
			<figure>
				<a href="{% url 'index' %}"><img src="../../static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></a>
			</figure>

      <div class="divider"><span>注册</span></div>
			<form>
				<div class="form-group">
					<input class="form-control" type="text" placeholder="吃货的用户名" v-model="peopleInfo.username" @blur="verifyName">
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<input class="form-control"  type="phone" placeholder="可以联系吃货的手机号" v-model="peopleInfo.mobile" @blur="verifyPhone">
					<i class="icon-phone"></i>
				</div>
				<div class="form-group">
					<input class="form-control" type="password"  placeholder="别把密码忘了啊" v-model="peopleInfo.password" @blur="verifyPwd">
					<i class="icon_lock_alt"></i>
				</div>
				<div class="form-group">
					<input class="form-control" type="password"  placeholder="再输一遍密码加深下印象" v-model="peopleInfo.password2" @blur="verifyPwd2">
					<i class="icon_lock_alt"></i>
				</div>

        <div class="form-group">
					<select class="form-control"  style="padding: 0 10%;" v-model="peopleInfo.role">
            <option value="1">用户</option>
            <option value="2">商家</option>
          </select>
          <i class="ti-user"></i>
				</div>
        <div class="form-group row">
          <div class="col-7">
            <input class="form-control" style="padding-left: 10px;" type="text" placeholder="Verification code">
          </div>
          <div class="col-5">
            <button type="button" class="btn_vrify form-control" @click="getCode" v-bind:disabled="btn_code.codeDisabled">{{btn_code.codeMsg}}</button>
          </div>
				</div>

				<div id="pass-info" v-bind:class="clearfix" v-show="err.errflag">{{err.errinfo}}</div>
				<input type="button" id="reg" class="btn_1 rounded full-width" value="现在注册!" @click="user_register">
				<div class="text-center add_top_10">
          有帐号?
          <strong><router-link to="/login">还不快开始干饭</router-link></strong>
        </div>
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
              username:"",
              mobile:"",
              password:"",
              password2:"",
              role:'',
              sms_code:"123456",
              allow:"true",
            },
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
            },
          }
        },
        methods: {
          triggerFile(event) {
            console.log(event.target.files)
          },
          verifyName() {
            var people = this.peopleInfo;
            if (people.username.replace(/(^\s*)|(\s*$)/g, "") === '') {
              this.err.errflag = true;
              this.err.errinfo = "名字不能为空，请输入名字";
              this.clearfix = "weakPass";
              return false;
            } else {
              var tmpThis=this;
              this.$httpM.get(this.$api.User.userNameCount,{params:{'username':this.peopleInfo.username}})
              .then(function (response) {
                if (response.data['count']!==0){
                  tmpThis.err.errflag = true;
                  tmpThis.err.errinfo = "已有名字重复！";
                  tmpThis.clearfix = "weakPass";
                  return false;
                }
                else {
                  tmpThis.err.errflag = false;
                  tmpThis.err.errinfo = "";
                  tmpThis.clearfix = "";
                  return true;
                }
              })
              .catch(function (err) {

              });

            }

          },
          verifyPhone() {
            var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (!phonereg.test(this.peopleInfo.mobile)) {
              this.err.errflag = true;
              this.err.errinfo = "输入正确的手机号码";
              this.clearfix = "weakPass";
              return false;
            } else {
              var tmpThis=this;
              this.$httpM.get(this.$api.User.userMobileCount,{params: {'mobile':this.peopleInfo.mobile}})
              .then(function (response) {
                  if (response.data['count']!==0){
                  tmpThis.err.errflag = true;
                  tmpThis.err.errinfo = "该手机号已被注册！";
                  tmpThis.clearfix = "weakPass";
                  return false;
                }
                else {
                  tmpThis.err.errflag = false;
                  tmpThis.err.errinfo = "";
                  tmpThis.clearfix = "";
                  //修改验证码按钮
                  tmpThis.btn_code.codeDisabled=false;
                  return true;
                }
              })
              .catch();
            }
          },
          verifyPwd() {
            //Must contain 5 characters or more
            var WeakPass = /(?=.{5,}).*/;
            //Must contain lower case letters and at least one digit.
            var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
            //Must contain at least one upper case letter, one lower case letter and one digit.
            var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
            if (!WeakPass.test(this.peopleInfo.password)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Very Weak! (输入大于5个字符)";
              this.clearfix = "weakPass";
              return true;
            } else if (!MediumPass.test(this.peopleInfo.password)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Still Weak! (输入数字组成更好的密码)";
              this.clearfix = "stillWeakPass";
              return true;
            } else if (!StrongPass.test(this.peopleInfo.password)) {
              this.err.errflag = true;
              this.err.errinfo = "密码：Good! (输入大写字母组成更强的密码)";
              this.clearfix = "goodPass";
              return true;
            } else {
              this.err.errflag = false;
              this.err.errinfo = "";
              this.clearfix = "";
              return true;
            }

          },
          verifyPwd2() {
            if (this.peopleInfo.password !== this.peopleInfo.password2) {
              this.err.errflag = true;
              this.err.errinfo = "密码两次不相同";
              this.clearfix = "weakPass";
              return false;
            } else {
              this.err.errflag = true;
              this.err.errinfo = "密码相同";
              this.clearfix = "goodPass";
              return true;
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
            if(this.peopleInfo.mobile!=="" && this.err.errflag){
              this.timing_60s();
            }
            else{
              alert("请输入正确的手机号后，再发送验证码！")
              this.btn_code.codeDisabled=true;
            }
          },
          user_register(){
            var registerFlag=this.verifyName()&&this.verifyPhone()&&this.verifyPwd()&&this.verifyPwd2();
            if (true){
              //console.log(this.peopleInfo);
              //var temp_this=this;
              this.$httpM.post(this.$api.User.register,this.peopleInfo,false)
                .then(response=>  {
                    console.log(response);
                    alert("注册成功！");
                    this.$router.push({path:'/login'})
                })
                .catch(err => {
                  alert("出错！");
                  console.log(err);
                })
            }

          },

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
