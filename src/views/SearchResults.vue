<template>
<div id="page">

	<Header_WB></Header_WB>
  <div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-12">
    <div>

        <h4><strong>{{total_count}}</strong> 家餐厅</h4>

        <div class="company_listing isotope-item high" v-for="Restaurant in restaurant_list">
            <div class="row">
                <div class="col-md-9">
                    <div class="company_info">
                        <figure><img :src="Restaurant.picture"  width="25%" ></figure>
                        <h3> {{Restaurant.res_name}} </h3>
                        <p> {{Restaurant.res_address}} </p>
                        <p><i class="ti-star ant-tag-orange">收藏数：</i>{{Restaurant.collection_count}}</p>

                    </div>
                </div>
                <div class="col-md-3">
                    <div class="text-center float-lg-right">

                    <span class="rating"><strong>reviews:{{Restaurant.review_count }}  score：{{Math.round(Restaurant.score)}}</strong>
                        <i class="icon_star" v-for="(item,index) in 5" :class="[{'empty':(index-Math.round(Restaurant.score))>=0}]"></i>
                    </span>
                    <div class="row">
                      <a-space size="small">
                        <button class="btn_1 small" @click="showResMenu(Restaurant.id)" v-show="editMenu">编辑菜单</button>
                        <span class="small"  v-show="!editMenu"></span>
                        <button class="btn_1 small" @click="showSingleRes(Restaurant.id)">Read more</button>
                      </a-space>

                    </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /company_listing -->
        <a-pagination  :default-current="1" :total="total_count" :defaultPageSize="8" class="pagination__wrapper add_bottom_30" @change="pageChange"/>
    </div>
        </div>
      </div>
  </div>
  <Footer_com></Footer_com>
</div>
</template>

<script>
import Footer_com from "../components/Footer_com";
import Header_WB from "../components/Header_WB";
export default {
  name: "SearchResults",
  components: {Header_WB, Footer_com},
}
</script>

<style scoped>

</style>
