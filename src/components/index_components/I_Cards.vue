<template>
    <div class="container margin_60_35">
			<div class="main_title_3">
					<h2>热点菜品</h2>
					<p>想一想今天要吃啥？</p>
					<router-link to="/restaurant_list">更多</router-link>
				</div>
            <div class="row justify-content-center">

				<div class="col-lg-4 col-6" v-for="item in card_lists">
					<a  class="box_cat_home" @click="showTagResList(item.name)">
						<img :src="item.img_path" width="65" height="65" alt="">
						<h3>{{item.name}}</h3>
						<ul class="clearfix">
							<li>{{item.result}} 家餐馆</li>
						</ul>
					</a>
				</div>

			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
</template>

<script>
import {getLocalStore, setLocalStore} from "../../assets/storage/localstorage";
    export default {
        name: "I_Cards",
        data(){
          return{
            card_lists:[
              {name:"火锅",result:2,img_path:"/static/img/hotpot.svg"},
              {name:"粉面馆",result:2,img_path:"/static/img/noodles.svg"},
              {name:"西餐",result:2,img_path:"/static/img/xican.svg"},
              {name:"小吃",result:2,img_path:"/static/img/taco.svg"},
              {name:"自助餐",result:2,img_path:"/static/img/pizza.svg"},
            ],
          }
        },
      watch:{

      },
        methods:{
          showTagResList(tagName){
            this.$router.push({name:'restaurant_list',query:{tagName:tagName}});
          },
          //获取分类中有多少餐馆
          getCategoryResNum(tag){
            let index=this.card_lists.findIndex(function (tagObj){
              return tagObj.name===tag;
            })
            let tmpThis=this;
            this.$httpM.get(this.$api.Tag_Res.list+'c'+tag,false)
            .then(function (response){
              tmpThis.card_lists[index].result=response.data['count'];
              setLocalStore(tag,response.data['count'].toString());

            })
            .catch(function (err){

            })
          },
          getLocationResNum(tag){
            let index=this.card_lists.findIndex(function (tagObj){
              return tagObj.name===tag;
            })
            let tmpThis=this;
            this.$httpM.get(this.$api.Tag_Res.list+'l'+tag,false)
            .then(function (response){
              setLocalStore(tag,response.data['count'].toString());
            })
            .catch(function (err){

            })
          },
        },
        created() {
          var tagList=JSON.parse(getLocalStore('tagsList'));
          for (var cat of tagList['种类']){
            this.getCategoryResNum(cat);
          }
          for (var location of tagList['地区']){
            this.getLocationResNum(location);
          }

        },

    }
</script>

<style scoped>

</style>
