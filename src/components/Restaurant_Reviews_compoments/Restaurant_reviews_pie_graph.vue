<template>
  <div id="pie" >

<!--<h3>{{pie_data.res_name}}的评分如下：</h3>-->

  <div id="main" style="width: 400px;height:400px;margin:0 auto;" ></div>
    </div>
</template>

<script>
import Charts from '@jiaminghi/charts'
export default {

  mounted() {
  },
  props: ['pie_data'],
  data() {
    return {pie_d:{
        res_name:"",
        pie_a:0,
        pie_b:0,
      },
    }
  },
  watch: {
    pie_data(newVal, oldVal) {
      this.pie_d = newVal;
   let container = document.getElementById('main');
    let myChart = new Charts(container);
    let option1 = {
      title: {
        text: this.pie_d.res_name
      },
      series: [
        {
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          data: [
            {name: '可口可乐', value: 50},
            {name: '百事可乐', value: 60},

          ],
          insideLabel: {
            show: true
          }
        }
      ]
    };
    myChart.setOption(option1);
    }
  }
}

</script>

<style scoped>

</style>
