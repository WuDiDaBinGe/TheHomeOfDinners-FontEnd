<template>
  <div id="page">
    <Header_WB></Header_WB>
    <Footer_com></Footer_com>
  </div>
</template>

<script>
    import Header_WB from "../components/Header_WB";
    import Footer_com from "../components/Footer_com";
    export default {
        name: "ManageResMenu",
      components: {Footer_com, Header_WB}
    }
</script>

<style scoped>

</style>
