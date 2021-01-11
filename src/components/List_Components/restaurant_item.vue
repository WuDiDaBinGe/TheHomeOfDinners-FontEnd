<template>
    <div>
        <h4><strong>{{total_count}}</strong> result for "Category"</h4>
        <div class="company_listing isotope-item high" v-for="Restaurant in restaurant_list">
            <div class="row">
                <div class="col-md-9">
                    <div class="company_info">
                        <figure><img :src="Restaurant.picture"  width="25%" ></figure>
                        <h3> {{Restaurant.res_name}} </h3>
                        <p> 推荐菜：yuxiubin </p>
                        <p> {{Restaurant.res_address}} </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="text-center float-lg-right">
                    <span class="rating"><strong>reviews:800+  rank:5  score：{{Math.round(Restaurant.score)}}</strong>
                        <i class="icon_star" v-for="(item,index) in 5" :class="[{'empty':(index-Math.round(Restaurant.score))>=0}]"></i>
                    </span>
                    <button class="btn_1 small" @click="showSingleRes(Restaurant.id)">Read more</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /company_listing -->

        <!-- /pagination -->
        <div class="pagination__wrapper add_bottom_30">
            <ul class="pagination">
                <li @click="previousPage"><a href="#0" class="prev" title="previous page">&#10094;</a></li>
                <li @click="toIndexPage(index)" v-for="(item,index) in new Array(total_page).fill(0)">
                    <a  :class="[{'active':current_page==index+1}]">{{index+1}}</a>
                </li>
                <li @click="nextPage"><a href="#0" class="next" title="next page">&#10095;</a></li>
            </ul>
        </div>
        <!-- /pagination -->
    </div>
</template>

<script>
import Pagination from './Pagination.vue';
import Nrange from '../../utils/utils'
import {getLocalStore} from "../../assets/storage/localstorage";
export default {
    components: { Pagination },
    name:"restaurant_item",
    props:['selectTag','parentName'],
    data(){
        return{
            restaurant_list:[
              {
                res_name:"东北人家",
                id:12,
              }
            ],
            total_count:0,
            next_page_api:"",
            previous_page_api:"",
            page_size_:8,
            current_page:1,
            total_page:0,
        }
    },
    methods:{
        //跳转到一个餐馆
        showSingleRes(res_id){
          //传参数时 不能用path传递参数
          this.$router.push({name:'restaurant',query:{id:res_id}});
        },
        previousPage(){
            this.current_page=(this.current_page-1);
            if(this.current_page===0){
                this.current_page=1;
            }
            if(this.previous_page_api!=null){
                this.getResList(this.previous_page_api);
            }

        },
        nextPage(){
            this.current_page=(this.current_page+1);
            if(this.current_page>this.total_page){
                this.current_page=this.total_page;
            }
            if(this.next_page_api!=null){
                this.getResList(this.next_page_api);
            }

        },
        //跳转到某一页
        toIndexPage(index){
            this.current_page=index+1;
            //没有筛选条件
            if (this.selectTag===""){
              var url=this.$api.Restaurant.list+"?page="+this.current_page;
            }
            else {
              var url=this.$api.Tag_Res.list+this.selectTag+"?page="+this.current_page;
            }
            console.log(this.current_page,url);
            this.getResList(url);
        },
        //根据url 获取餐馆列表
        getResList(url,params=false){
            var tmp_this=this;
            this.$httpM.get(url,params)
            .then(function (response) {
                tmp_this.restaurant_list=response.data.results;
                tmp_this.total_count=response.data.count;
                tmp_this.next_page_api=response.data.next;
                tmp_this.previous_page_api=response.data.previous;
                //判断有多少页 (向上整除)
                tmp_this.total_page=Math.ceil(tmp_this.total_count / tmp_this.page_size_);
                console.log("多少页："+tmp_this.total_page);
            })
            .catch(function (err) {
                alert(err);
                console.log(err)
            })
        }
    },
    created(){
      console.log("父组件名称：",this.parentName);
      //如果父组件为餐馆列表
      if (this.parentName==='RestaurantList'){
        //没有筛选条件返回全部列表
        if (this.selectTag===""){
          this.getResList(this.$api.Restaurant.list);
        }
        else {
          console.log(this.selectTag);
          this.getResList(this.$api.Tag_Res.list+this.selectTag);
        }
      }
      //如果父组件为用户信息页面
      else if (this.parentName==='UserInfo'){
          let uerId=JSON.parse(getLocalStore("userLogin"))['user_id'];
          this.getResList(this.$api.User.userCollectionRes.replace("{id}",uerId));
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
