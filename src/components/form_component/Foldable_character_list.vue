<template>
    <div class="form-block">
      <div class="chara-con col-9">
          <div class="chara-label" :class="[{'text-success':select_index.indexOf(index)>-1},{'border-success':select_index.indexOf(index)>-1}]"  v-for="(item,index) in resMenu.slice(0,display_num)" @click="changeSelect(index)">{{item.name}}</div>
      </div>
      <div class="for-btn col-3">
        <a @click="open_close"><b>{{folder_text}}</b><i v-bind:class="arrow_drection"></i></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Foldable_character_list",
        props:['resMenu'],
        data(){
          return{
            res_food:["臭豆腐","小龙虾","大香肠","茶颜悦色","茶颜悦色","茶颜悦色","茶颜悦色","茶颜悦色","茶颜悦色","茶颜悦色"],
            select_index:[],
            open_flag:false,
            arrow_drection:"ti-arrow-circle-down",
            folder_text:"展开",
            display_num:5,
          }
        },
        methods:{
          open_close(){
            //处理右边折叠按钮
            this.open_flag=!this.open_flag;
            //标签被展开
            if (this.open_flag){
              this.arrow_drection="ti-arrow-circle-up";
              this.folder_text="隐藏";
              this.display_num=this.resMenu.length;
            }
            //标签折叠
            else {
              this.arrow_drection="ti-arrow-circle-down";
              this.folder_text="展开";
              this.display_num=5;
            }
          },
          changeSelect: function (index) {
            //console.log("点击",index);
            var select_index = this.select_index.indexOf(index);
            //如果选中的标签
            if (select_index > -1) {
              this.select_index.splice(select_index, 1);
            }
            //如果该标签未选中
            else {
              this.select_index.push(index);
            }
            //console.log("selectIndex:",this.select_index.toString());
            //console.log("resMenu:"+this.resMenu[0].name);
            //生成选中的菜品名称列表
            let recomMenuList = [];
            for (var i=0;i<this.select_index.length;i++) {
              recomMenuList.push(this.resMenu[this.select_index[i]].id);
            }
            //console.log(recomMenuList.toString());
            this.$emit('selectMenuEvent', recomMenuList)
          }
        }
    }
</script>

<style scoped>
.form-block {
    background: #fff;

    font-size: 14px;
    position: relative;
}
.form-block .chara-con {
    padding: 0 60px 0 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    display: flex;
}
.form-block .chara-con .chara-label {
    height: 26px;
    cursor: pointer;
    background: #fff;
    margin-right: 5px;
    margin-bottom: 14px;
    white-space: nowrap;
    border: 1px solid #ccc;
    border-radius: 13px;
    padding: 0 10px;
    line-height: 26px;
    color: #999;
}
.form-block .for-btn {
    padding-right: 12px;
    color: #999;
    line-height: 16px;
    position: absolute;
    top: 4px;
    right: 15px;
    z-index: 100;
}
</style>
