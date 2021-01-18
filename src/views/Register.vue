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
					<select class="form-control"  style="padding: 0 10%;" v-model="peopleInfo.role" @blur="checkRole">
            <option value="0">请选择角色</option>
            <option value="1">用户</option>
            <option value="2">商家</option>
          </select>
          <i class="ti-user"></i>
				</div>
        <div class="form-group row">
          <div class="col-7">
            <input class="form-control" style="padding-left: 10px;" type="text" placeholder="手机验证码" @blur="checkSmsCode" v-model="peopleInfo.sms_code">
          </div>
          <div class="col-5">
            <button type="button" class="btn_vrify form-control" @click="getCode" v-bind:disabled="btn_code.codeDisabled">{{btn_code.codeMsg}}</button>
          </div>
				</div>

				<div id="pass-info" v-bind:class="clearfix" v-show="!canRegister">{{errInfo}}</div>
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
              role:0,
              sms_code:"",
              allow:"true",
            },
            errInfo:"",
            formFlag:{
              NameFlag:false,
              PhoneFlag:false,
              PwdFlag:false,
              Pwd2Flag:false,
              RoleFlag:false,
              smsFlag:false,
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
        computed:{
          canRegister(){
            let flag=true;
            const flagTmp=this.formFlag;
            //遍历form标志
            Object.keys(flagTmp).forEach(function (key) {
                flag=flag && flagTmp[key];
            });
            return flag;
          },
        },
        methods: {
          verifyName:function () {
            var name = this.peopleInfo.username;
            if (name.replace(/(^\s*)|(\s*$)/g, "") === ''||name.length<5||name.length>20) {
              this.errInfo = "名字应为5-20个字符！";
              this.clearfix = "weakPass";
            } else {
              var tmpThis=this;
              this.$httpM.get(this.$api.User.userNameCount,{params:{'username':this.peopleInfo.username}})
              .then(function (response) {
                if (response.data['count']!==0){
                  tmpThis.errInfo = "已有名字重复！";
                  tmpThis.clearfix = "weakPass";
                }
                else {
                  tmpThis.errInfo = "";
                  tmpThis.clearfix = "";
                  tmpThis.formFlag.NameFlag=true;
                }
              })
              .catch(function (err) {

              });

            }

          },
          verifyPhone:function () {
            var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (!phonereg.test(this.peopleInfo.mobile)) {
              this.errInfo = "输入正确的手机号码";
              this.clearfix = "weakPass";
            } else {
              var tmpThis=this;
              this.$httpM.get(this.$api.User.userMobileCount,{params: {'mobile':this.peopleInfo.mobile}})
              .then(function (response) {
                  if (response.data['count']!==0){
                  tmpThis.errInfo = "该手机号已被注册！";
                  tmpThis.clearfix = "weakPass";
                }
                else {
                  tmpThis.errInfo = "";
                  tmpThis.clearfix = "";
                  //修改验证码按钮
                  tmpThis.btn_code.codeDisabled=false;
                  tmpThis.formFlag.PhoneFlag=true;
                }
              })
              .catch();
            }
          },
          verifyPwd:function () {
            //Must contain 5 characters or more
            var WeakPass = /^[a-zA-Z0-9]{5,20}$/;
            //Must contain lower case letters and at least one digit.
            var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,20}$/;
            //Must contain at least one upper case letter, one lower case letter and one digit.
            var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,20}$/;
            if (!WeakPass.test(this.peopleInfo.password)) {
              this.errInfo = "密码：Very Weak! (输入大于5个字符小于20个字符)";
              this.clearfix = "weakPass";
            } else if (!MediumPass.test(this.peopleInfo.password)) {
              this.errInfo = "密码：Still Weak! (输入数字组成更好的密码)";
              this.clearfix = "stillWeakPass";
              this.formFlag.PwdFlag=true;
            } else if (!StrongPass.test(this.peopleInfo.password)) {
              this.errInfo = "密码：Good! (输入大写字母组成更强的密码)";
              this.clearfix = "goodPass";
              this.formFlag.PwdFlag=true;
            } else {
              this.errInfo = "";
              this.clearfix = "";
              this.formFlag.PwdFlag=true;
            }

          },
          verifyPwd2:function () {
            if (this.peopleInfo.password !== this.peopleInfo.password2) {
              this.errInfo = "密码两次不相同";
              this.clearfix = "weakPass";

            } else {
              this.errInfo = "";
              this.clearfix = "";
              this.formFlag.Pwd2Flag=true;
            }
          },
          checkRole(){
            if (this.peopleInfo.role===0){
              this.errInfo = "请选择角色";
              this.clearfix = "weakPass";
            }
            else {
              this.errInfo = "";
              this.clearfix = "";
              this.formFlag.RoleFlag=true;
            }
          },
          timing_60s() {
            //发送手机验证码
            this.$httpM.get(this.$api.SmsCode.read.replace("{mobile}",this.peopleInfo.mobile),false)
            .then(response=>{
                this.$message.success("验证码已发送");
            })
            .catch(function (err) {

            });
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
          checkSmsCode(){
            var smsCode = /^[0-9]{3,10}$/;
            if (!smsCode.test(this.peopleInfo.sms_code.length)) {
              this.errInfo = "请填写正确的验证码";
              this.clearfix = "weakPass";
            } else {
              this.errInfo = "";
              this.clearfix = "";
              this.formFlag.smsFlag=true;
            }
          },
          getCode() {
            if(this.peopleInfo.mobile!=="" && this.formFlag.PhoneFlag){
              this.timing_60s();
            }
            else{
              this.$message.info("请输入正确的手机号后，再发送验证码！");
              this.btn_code.codeDisabled=true;
            }
          },
          user_register(){
            if(!this.canRegister){
              console.log(this.formFlag);
              this.$message.error("请检查注册信息");
              return ;
            }
            let tmpThis=this;
            if (this.canRegister){
              this.$httpM.post(this.$api.User.register,this.peopleInfo,false)
                .then(function (response)  {
                  console.log("response:"+response);
                   if(response!==undefined){
                      tmpThis.$message.success("注册成功！");
                      tmpThis.$router.push({path:'/login'})
                   }

                })
                .catch(function (error) {

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
