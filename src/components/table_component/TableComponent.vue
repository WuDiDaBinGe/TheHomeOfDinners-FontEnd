<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">
      添加菜品
    </a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template slot="name" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.id, 'name', $event)"></EditTableCell>
      </template>

      <template slot="price" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.id, 'price', $event)"></EditTableCell>
      </template>

      <template slot="picture" slot-scope="text,record">
        <ImageUpload :text="text"></ImageUpload>
      </template>

      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除该菜品吗？"
          @confirm="() => onDelete(record.id)"
        >
          <a ><i class="ti-trash text-danger">删除</i></a>
        </a-popconfirm>
      </template>

    </a-table>
  </div>
</template>

<script>
import EditTableCell from "./EditTableCell";
import ImageUpload from "./ImageUpload";
export default {
  name:"TableComponent",
  components: {
    ImageUpload,
    EditTableCell,
  },
  props:['resId'],
  data() {
    return {
      res_id:null,
      dataSource: [

      ],
      count: 2,
      columns: [
        {
          title: "ID",
          dataIndex: 'id',
          width: '8%',
        },
        {
          title: '菜品名称(可编辑)',
          dataIndex: 'name',
          width: '30%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: '价格(可编辑)',
          dataIndex: 'price',
          width: '20%',
          scopedSlots: { customRender: 'price' },
        },
        {
          title: '推荐次数',
          width: '15%',
          dataIndex: 'recommendations',
        },
        {
          title: '菜品图片',
          dataIndex: 'picture',
          width: '20%',
          scopedSlots: { customRender: 'picture' },
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },

      ],
    };
  },
  mounted() {
    this.getResMenu(this.resId);
  },
  methods: {
    getResMenu(resid){
      let tmpThis=this;
      this.$httpM.get(this.$api.Menu.resMenu.replace("{id}",resid))
      .then(function (response){
        tmpThis.dataSource=response.data;

      })
      .catch(function (err){

      })
      //转化成字符串
      for (var i=0;i<this.dataSource.length;i++){
        this.dataSource[i].recommendations=this.dataSource[i].recommendations.toString();
        this.dataSource[i].price=this.dataSource[i].price.toString();
        console.log(typeof (this.dataSource[i].price));
      }
    },
    onCellChange(key, dataIndex, value) {
      console.log(key,dataIndex,value);
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.id === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      console.log("recordKey:"+key);
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.id !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        price: 32,
        recommendations: 0,
        picture: "http://39.96.37.82:8888/pictures/menu/%E7%89%9B%E8%82%89%E7%B2%89.jpg",
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },

};
</script>

<style scoped>

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
