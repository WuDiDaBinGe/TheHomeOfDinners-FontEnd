<template>
  <div id="login_bg">
    <div id="login" style="position :relative ;">
      <aside >
        <figure>
          <a href="index.html"><img src="../../static/img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></a>
        </figure>
        <form action="/login" method="post">
                    {% csrf_token %}
          <div class="divider"><span>Login</span></div>
          <div class="form-group">
            <input class="form-control" id="name" type="text" placeholder="Name" name="username">
            <i class="ti-user"></i>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password">
            <i class="icon_lock_alt"></i>
          </div>
          <div class="form-group">
            <select class="form-control" name="usertype" style="padding: 0 10%;">
              <option value="User">用户</option>
              <option value="Merchant">商家</option>
              <option value="Admin">管理员</option>
            </select>
            <i class="ti-user"></i>
          </div>
          <div class="clearfix add_bottom_30">
            <div class="checkboxes float-left">

            </div>
          </div>
          <div id="pass-info" v-bind:class="classlo"></div>
          <input type="submit" id="losu" class="btn_1 rounded full-width" value="登录食客之家">
          <div class="text-center add_top_10">新用户/商家? <strong><a href="{% url 'register' %}">注册!</a></strong></div>
        </form>
        <CopyRight></CopyRight>
      </aside>
    </div>
  </div>
</template>

<script>
    import CopyRight from "../components/CopyRight";
    export default {
      name: "Login",
      components: {CopyRight},
      data(){
          return{
            classlo:"",
          }
        }
    }
</script>

<style scoped>

</style>
