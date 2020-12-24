<template>
  <div class="review_card">
    <div class="row">
      <div class="col-md-2 user_info">
        <figure><img src="/static/img/avatar6.jpg" alt=""></figure>
        <h5>Marika</h5>
      </div>
      <div class="col-md-10 review_content">
        <div class="clearfix add_bottom_15">
          <span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
          <em>Published 54 minutes ago</em>
        </div>
        <h4>"Avesome Experience"</h4>
        <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.</p>
        <ul>
          <li><a href="#0"><i class="icon_like_alt"></i><span>赞</span></a></li>
          <li><a href="#0"><i class="icon_dislike_alt"></i><span>踩</span></a></li>
          <li><span>更多：</span> <a href="#0"><i class="icon-reply"></i>回复</a> <a href="#0"><i class="icon-edit"></i>追评</a> <a href="#0"><i class="icon-trash"></i>删除</a></li>
        </ul>
      </div>
    </div>
    <!-- /row -->
    <div class="row reply">
      <div class="col-md-2 user_info">
        <figure><img src="/static/img/avatar.jpg" alt=""></figure>
      </div>
      <div class="col-md-10">
        <div class="review_content">
          <strong>Reply from Good Electronics</strong>
          <em>Published 3 minutes ago</em>
          <p><br>Hi Monika,<br><br>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.<br><br>Thanks</p>
        </div>
      </div>
    </div>
    <!-- /reply -->
  </div>
<!-- /review_card -->
</template>

<script>
    export default {
        name: "Reviews_Cards"
    }
</script>

<style scoped>

</style>
