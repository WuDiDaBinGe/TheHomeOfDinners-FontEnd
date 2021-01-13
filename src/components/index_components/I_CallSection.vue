<template>
  <div class="call_section_3">
    <div class="wrapper">
      <div class="container clearfix">
        <div class="col-lg-5 col-md-7 float-right">
          <h3>提示：</h3>
          <p>此平台是为每个吃货提供了一个评论平台，分享自己的经历来帮助其他吃货选择更好的商家，并帮助商家适应吃货们的需求。我们的目标是：”干饭人，干饭魂，干饭都是人上人“</p>
          <p><a class="btn_1 add_top_10 wow bounceIn" href="{% url 'category-companies-listings-filterstop-guest' %}?name=" data-wow-delay="0.5s">Join ABSA Platform Now!</a></p>
        </div>
      </div>
      <!-- /container -->
    </div>
  </div>
  <!-- /call_section -->
</template>

<script>
    export default {
        name: "I_CallSection"
    }
</script>

<style scoped>

</style>
