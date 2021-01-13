<template>
    <div>
      <form>
        <div class="settings_panel">
            <h3>个人设置</h3>
            <hr>
            <input name="id" id="id" value="User_data.4" style="display: none">
            <input name="cho" id="cho" value="0" style="display: none">


            <div class="form-group">
                <label>编辑头像</label>
                <div class="fileupload"><input type="file"  accept="image/*"></div>
            </div>
            <div class="form-group">
                <label>编辑手机号</label>
                <input class="form-control" type="text"  :value="user.name">
            </div>
            <div class="form-group">
                <label>编辑姓名</label>
                <input class="form-control" type="text"  :value="user.name">
            </div>
            <p class="text-right"><a class="btn_1 small add_top_15" href="#0" onclick="document.getElementById('cho').value='0';document.getElementById('changeuser').submit();">保存个人信息</a></p>
        </div>
        <!-- /settings_panel -->
        <div class="settings_panel">
            <h3>更改密码</h3>
            <hr>
            <div class="form-group">
                <label>Current Password</label>
                <input class="form-control" type="password" id="password" name="password">
            </div>
            <div class="form-group">
                <label>新密码</label>
                <input class="form-control" type="password" id="password1" name="password1">
            </div>
            <div class="form-group">
                <label>再输一次密码</label>
                <input class="form-control" type="password" id="password2" name="password2">
            </div>
            <div id="pass-info" class="clearfix"></div>
            <p class="text-right"><a class="btn_1 small" href="#0" onclick="document.getElementById('cho').value='1';document.getElementById('changeuser').submit();">保存密码</a></p>
        </div>
        <!-- /settings_panel -->
      </form>
    </div>

</template>

<script>
export default {
    name:"userInfo_form",
    data(){
        return{
            user:{
                name:"yuxiubin",
                pic_src:"https://bkimg.cdn.bcebos.com/pic/5243fbf2b21193134c87adbe67380cd790238dfc?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
                profile:"",
                email:"1151680016@qq.com",
                city:"湖南长沙",
                country:"",
                password:"",
                new_password:"",
                comfir_password:"",
                reviews_num:"",
                reads_num:"",
                userfule_num:"",
            }

        }
    }
}
</script>

<style scoped>

</style>
