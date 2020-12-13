<template>
    <div id="page" class="theia-exception">
        <Header_WB></Header_WB>
        <c_404_component></c_404_component>
        <Footer_com></Footer_com>
    </div>
</template>

<script>
import Footer_com from "../components/Footer_com.vue";
import Header_WB from '../components/Header_WB.vue';
import c_404_component from '../components/404_component.vue';
export default {
  components: { Footer_com,Header_WB,c_404_component },
    
    
}
</script>

<style scoped>

</style>