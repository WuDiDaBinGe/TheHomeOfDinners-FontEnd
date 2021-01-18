<template>
    <div>
      <form>
        <div class="settings_panel">
            <h3>个人设置</h3>
            <hr>
            <input name="id" id="id" value="User_data.4" style="display: none">
            <input name="cho" id="cho" value="0" style="display: none">

            <div class="form-group">
                <label>上传头像</label>
                <UserAvatar :userId="userL.id"></UserAvatar>
            </div>
            <div class="form-group">
                <label>修改手机号</label>
                <input class="form-control" type="text"  v-model="userL.mobile" >
            </div>
            <p class="text-right"><a class="btn_1 small add_top_15" @click="changeUserMobile_picture">保存个人信息</a></p>
        </div>
        <!-- /settings_panel -->
        <div class="settings_panel">
            <h3>更改密码</h3>
            <hr>
            <div class="form-group">
                <label>旧密码</label>
                <input class="form-control" type="password"   v-model="lineOlderPassword" @blur="verifyOldwd">
            </div>
            <div class="form-group">
                <label>新密码</label>
                <input class="form-control" type="password"  v-model="lineNewPassword" @blur="verifyPwd">
            </div>
            <div class="form-group">
                <label>再输一次密码</label>
                <input class="form-control" type="password" v-model="lineReNewPassword" @blur="verifyPwd2">
            </div>
          <div id="pass-info" v-bind:class="clearfix" v-show="!canChangePassword">{{errInfo}}</div>
            <p class="text-right"><a class="btn_1 small" @click="changeUserPassword">保存密码</a></p>
        </div>
        <!-- /settings_panel -->
      </form>
    </div>

</template>

<script>
import UserAvatar from "./UserAvatar";
export default {
    name:"userInfo_form",
    components: {UserAvatar},
    props:['userL'],
      data(){
          return{
              user:this.userL,
              lineOlderPassword:"",
            lineNewPassword:"",
            lineReNewPassword:"",
            clearfix:"",
            errInfo:"",
            formFlag:{
                OldPwdFlag:false,
                PwdFlag:false,
                Pwd2Flag:false,
            }
          }
      },
    methods: {
      changeUserMobile_picture(){
        var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
        if (!phonereg.test(this.userL.mobile)){
          this.$message.error("输入正确的手机号");
          return;
        }
        let tmpThis=this;
        this.$httpM.put(this.$api.User.update.replace("{id}",this.userL.id),{mobile:this.userL.mobile})
        .then(function (response){
          tmpThis.$message.success("修改成功！");
        })
        .catch(function (err){

        })
      },
      verifyOldwd(){
        let tmpThis = this;
        this.$httpM.put(this.$api.User.checkOldPassword.replace("{id}",this.userL.id),{password:this.lineOlderPassword}).then(function (response){
          if(response.data===true){
             tmpThis.formFlag.OldPwdFlag=true;
              tmpThis.errInfo="";
              tmpThis.clearfix="";
          }else{
           tmpThis.formFlag.OldPwdFlag=false;
           tmpThis.errInfo="与旧密码不匹配！";
           tmpThis.clearfix="weakPass";
          }
        });
      },
      verifyPwd:function () {
            //Must contain 5 characters or more
            var WeakPass = /^[a-zA-Z0-9]{5,20}$/;
            //Must contain lower case letters and at least one digit.
            var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,20}$/;
            //Must contain at least one upper case letter, one lower case letter and one digit.
            var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,20}$/;
            if (!WeakPass.test(this.lineNewPassword)) {
              this.errInfo = "密码：Very Weak! (输入大于5个字符小于20个字符)";
              this.clearfix = "weakPass";
            } else if (!MediumPass.test(this.lineNewPassword)) {
              this.errInfo = "密码：Still Weak! (输入数字组成更好的密码)";
              this.clearfix = "stillWeakPass";
              this.formFlag.PwdFlag=true;
            } else if (!StrongPass.test(this.lineNewPassword)) {
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
            if (this.lineNewPassword !== this.lineReNewPassword) {
              this.errInfo = "密码两次不相同";
              this.clearfix = "weakPass";

            } else {
              this.errInfo = "";
              this.clearfix = "";
              this.formFlag.Pwd2Flag=true;
            }
          },
      changeUserPassword(){
        if(!this.canChangePassword){
          this.$message.error("输入有错误，请检查！");
          return ;
        }
        else{
          this.$httpM.put(this.$api.User.update.replace("{id}",this.userL.id),{password:this.lineNewPassword}).catch(function (error){
            console.log("error",error);
          });
        }
      },
    },
  computed:{
       canChangePassword(){
            let flag=true;
            const flagTmp=this.formFlag;
            //遍历form标志
            Object.keys(flagTmp).forEach(function (key) {
                flag=flag && flagTmp[key];
            });
            return flag;
          },
  }
}
</script>

<style scoped>

</style>
