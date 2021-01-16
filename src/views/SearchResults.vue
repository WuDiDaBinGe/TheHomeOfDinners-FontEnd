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
                        <button class="btn_1 small" @click="showSingleRes(Restaurant.id)">餐馆详情</button>
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
  data(){
    return{
      tagRes:this.$route.query.tag,
      resName:this.$route.query.searchName,
      restaurant_list:[
      ],
      total_count:0,
      next_page_api:"",
      previous_page_api:"",
      total_page:0,
    }
  },
  methods:{
    showSingleRes(res_id){
      this.$router.push({name:'restaurant',query:{id:res_id}});
    },
    //分页
    pageChange(pageNumber){
      if (this.tagRes==="全部"){
        let url=this.$api.Restaurant.list+"?page="+pageNumber+'&res_name='+this.resName;
        this.getSearchResult(url);
      }
      else{
        let url=this.$api.Tag_Res.list+'c'+this.tagRes+"?page="+pageNumber+"&res_name="+this.resName;
        this.getSearchResult(url);
      }
    },
    //根据标签名称获取餐馆列表
    getSearchResult(url){
      let  tmp_this=this;
      this.$httpM.get(url,false)
      .then(function (response){
        tmp_this.restaurant_list=response.data.results;
        tmp_this.total_count=response.data.count;
        tmp_this.next_page_api=response.data.next;
        tmp_this.previous_page_api=response.data.previous;
        //判断有多少页 (向上整除)
        tmp_this.total_page=Math.ceil(tmp_this.total_count / tmp_this.page_size_);
      })
      .catch(function (err){

      })
    },
    //根据名字搜索餐馆
  },
  created() {
    if (this.tagRes==="全部"){
      let url=this.$api.Restaurant.list+'?res_name='+this.resName;
      this.getSearchResult(url);
    }
    else{
      let url=this.$api.Tag_Res.list+'c'+this.tagRes+"?res_name="+this.resName;
      console.log(url);
      this.getSearchResult(url);
    }
  }
}
</script>

<style scoped>
.company_info figure img{
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
}
</style>
