<template>
  <section class="hero_single version_3">
			<div class="wrapper">
				<div class="container">
					<h3>每次评论都是段难忘的回忆</h3>
					<p>确定想吃的、找评分高的、读评论、填肚子</p>
					<div class="row justify-content-center">
						<div class="col-lg-9">


							<div class="row no-gutters custom-search-input-2">

								<div class="col-lg-7">
									<div class="form-group">
										<input class="form-control" type="text" v-model="searchName" placeholder="今天要吃啥呢">
										<i class="icon_search"></i>
									</div>
								</div>

                <div class="col-lg-3">
									<select class="wide nice-select" name="find2" v-model="tag">
                    <option value="全部">全部</option>
										<option v-for="item in tags_list" v-bind:value="item">{{item}}</option>
									</select>
								</div>


                <div class="col-lg-2">
									<input type="submit" value="搜一搜" @click="search">
								</div>


							</div>
							<!-- /row -->

						</div>
					</div>
				</div>
			</div>
  </section>
</template>

<script>
    import {setLocalStore} from "../../assets/storage/localstorage";
    export default {
        name: "Search_part",
        data(){
          return{
            searchName:"",
            tag:"全部",
            tags_list:["All Categories","Lebanese","Cafe","Bar","Pizza","Seafood","Roast","Spaghetti","Dessert"]
          }
        },
      created() {
        this.getTagsList();
      },
      methods:{
          search(){
            if(this.searchName.length<1){
              this.$message.error("请输入搜索名称！");
            }
            else {
              this.$router.push({name:'searchResults',query:{tag:this.tag,searchName:this.searchName}});
            }
          },
          getTagsList(){
            var tmpThis=this;
            this.$httpM.get(this.$api.Tag.lists,false)
            .then(function (response) {

                tmpThis.tags_list=response.data['种类'];
                setLocalStore("tagsList",response.data);
            })
            .catch(function (err) {
                console.log(err);
            })
          }
      }
    }
</script>

<style scoped>

</style>
