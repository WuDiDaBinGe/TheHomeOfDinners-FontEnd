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
            <p class="text-right"><a class="btn_1 small add_top_15" @click="changeUserInfo">保存个人信息</a></p>
        </div>
        <!-- /settings_panel -->
        <div class="settings_panel">
            <h3>更改密码</h3>
            <hr>
            <div class="form-group">
                <label>Current Password</label>
                <input class="form-control" type="password"  >
            </div>
            <div class="form-group">
                <label>新密码</label>
                <input class="form-control" type="password"  >
            </div>
            <div class="form-group">
                <label>再输一次密码</label>
                <input class="form-control" type="password" >
            </div>
            <div id="pass-info" class="clearfix"></div>
            <p class="text-right"><a class="btn_1 small">保存密码</a></p>
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
              password:{

              },
          }
      },
    methods: {
      changeUserInfo(){
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
    },
}
</script>

<style scoped>

</style>
