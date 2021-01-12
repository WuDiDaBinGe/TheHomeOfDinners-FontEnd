<template>
  <div id="page">
    <Header_WB></Header_WB>
    <div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
          <ImageUpload></ImageUpload>
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
    import Restaurant_Info_Card from "../components/Restaurant_Reviews_compoments/Restaurant_Info_Card";
    import ImageUpload from "../components/table_component/ImageUpload";
    export default {
        name: "ManageResMenu",
      components: {ImageUpload, Restaurant_Info_Card, TableComponent, Footer_com, Header_WB}
    }
</script>

<style scoped>
.margin_60_35 {
  padding-top: 60px;
  padding-bottom: 35px;
}

</style>
