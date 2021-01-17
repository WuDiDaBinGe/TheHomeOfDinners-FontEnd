<template>
  <div id="page">
    <Header_WB></Header_WB>

    <div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
          <TableComponent :resId="resId"></TableComponent>
        </div>
        <div class="col-lg-4" id="sidebar">
					<div class="box_general">
						<h5>删除餐馆</h5>
						<p>删除之后，您的餐馆一切信息将被清空!</p>
						<a  class="btn_1 small" @click="deleteRestaurant()">删除餐馆</a>
					</div>
				</div>
      </div>
    </div>
    <Footer_com></Footer_com>
  </div>
</template>

<script>
  import Header_WB from "../components/Header_WB";
  import Footer_com from "../components/Footer_com";
  import TableComponent from "../components/table_component/TableComponent";
  export default {
      name: "ManageResMenu",
      components: {TableComponent, Footer_com, Header_WB},
      data(){
        return{
          resId:this.$route.query.id,
        }
      },
      created() {

      },
      methods:{
          deleteRestaurant(){
            this.$confirm('此操作将永久删除该, 是否继续?','提示',{
              confirmButtonText:'确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(( ) => {
              this.$httpM.post(this.$api.Restaurant.delete.replace("{id}",this.res_id)).catch(function (error){
                console.log("error",error);
              });
              this.$message({
                type: 'success',
                message: '删除成功！'
              });
            });
          }
      }
  }
</script>

<style scoped>
.margin_60_35 {
  padding-top: 60px;
  padding-bottom: 35px;
}

</style>
