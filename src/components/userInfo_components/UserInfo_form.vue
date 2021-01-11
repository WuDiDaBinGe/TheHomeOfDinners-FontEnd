<template>
    <div>
      <form>
        <div class="settings_panel">
            <h3>Personal settings</h3>
            <hr>
            <input name="id" id="id" value="User_data.4" style="display: none">
            <input name="cho" id="cho" value="0" style="display: none">

            <div class="form-group">
                <label>Edit Profile text</label>
                <textarea class="form-control"  style="height: 180px;" placeholder="">{{user.name}}</textarea>
            </div>
            <div class="form-group">
                <label>Edit Photo</label>
                <div class="fileupload"><input type="file"  accept="image/*"></div>
            </div>
            <div class="form-group">
                <label>Edit Email</label>
                <input class="form-control" type="email"  :value="user.email">
            </div>
            <div class="form-group">
                <label>Edit name</label>
                <input class="form-control" type="text"  :value="user.name">
            </div>
            <div class="form-group">
                <label>Edit Full name</label>
                <input class="form-control" type="text"  :value="user.name">
            </div>
            <div class="form-group">
                <label>Edit City</label>
                <input class="form-control" type="text"  :value="user.city">
            </div>
            <div class="form-group">
                <label>Edit Country</label>
                <input class="form-control" type="text"  :value="user.country">
            </div>
            <p class="text-right"><a class="btn_1 small add_top_15" href="#0" onclick="document.getElementById('cho').value='0';document.getElementById('changeuser').submit();">Save personal info</a></p>
        </div>
        <!-- /settings_panel -->
        <div class="settings_panel">
            <h3>Change password</h3>
            <hr>
            <div class="form-group">
                <label>Current Password</label>
                <input class="form-control" type="password" id="password" name="password">
            </div>
            <div class="form-group">
                <label>New Password</label>
                <input class="form-control" type="password" id="password1" name="password1">
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input class="form-control" type="password" id="password2" name="password2">
            </div>
            <div id="pass-info" class="clearfix"></div>
            <p class="text-right"><a class="btn_1 small" href="#0" onclick="document.getElementById('cho').value='1';document.getElementById('changeuser').submit();">Save password</a></p>
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
