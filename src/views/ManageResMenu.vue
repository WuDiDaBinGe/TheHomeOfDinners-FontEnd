<template>
  <div id="page">
    <Header_WB></Header_WB>
    <div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
          <TableComponent :resId="resId"></TableComponent>
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
        //

      },
      methods:{

      }
  }
</script>

<style scoped>
.margin_60_35 {
  padding-top: 60px;
  padding-bottom: 35px;
}

</style>
