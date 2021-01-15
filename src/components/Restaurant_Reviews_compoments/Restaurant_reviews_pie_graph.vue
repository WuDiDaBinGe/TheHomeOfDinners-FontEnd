<template>
  <div id="pie" >

    <!--<h3>{{pie_data.res_name}}的评分如下：</h3>-->
    <div id="main" style="width: 400px;height:400px;margin:0 auto;" ></div>
  </div>
</template>

<script>
import Charts from '@jiaminghi/charts'
export default {
  name:"Restaurant_reviews_pie_graph",
  props: ['nav','pos'],
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    console.log("mounted中");
    console.log(this.nav);
    console.log(this.pos);
    console.log("开始绘图！")

  },
  watch: {
    nav:function (newValue,oldValue){
        console.log(newValue+"newValue");
        this.draw(newValue,100-newValue);
    },
  },
  methods:{
    draw(pos,nav){
      let container = document.getElementById('main');
      let myChart = new Charts(container);
      console.log("该数值为：",pos,nav);
      let option1 = {
        title: {
          text: "模型分析结果",
        },
        series: [
          {
            type: 'pie',
            radius: '40%',
            center: ['50%', '50%'],
            data: [
              {name: '差评', value: nav},
              {name: '好评', value: pos},

            ],
            insideLabel: {
              show: true
            }
          }
        ]
      };
      myChart.setOption(option1);
    },

  }
}

</script>

<style scoped>

</style>
