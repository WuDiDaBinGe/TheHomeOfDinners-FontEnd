<template>
  <div id="page">

  <I_Header></I_Header>

	<main>
    <search_part></search_part>

    <!-- /hero_single -->

    <I_Cards></I_Cards>

    <I_LastReviews></I_LastReviews>


    <I_RegionList></I_RegionList>

    <I_CallSection></I_CallSection>


	</main>
	<!-- /main -->


	</div>
	<!-- page -->


</template>

<script>
    import I_Header from "../components/I_Header";
    import Search_part from "../components/Search_part";
    import I_Cards from "../components/I_Cards";
    import I_CallSection from "../components/I_CallSection";
    import I_LastReviews from "../components/I_LastReviews";
    import I_RegionList from "../components/I_RegionList";
    export default {
        name: "index",
      components: {I_RegionList, I_LastReviews, I_CallSection, Search_part, I_Header,I_Cards}
    }
</script>

<style scoped>

</style>
