<template>
  <div>
    <a-table class="bg-light" :data-source="dataSource" :columns="columns" :rowKey="record => record.id">
      <template slot="name" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.id, 'name', $event)"></EditTableCell>
      </template>

      <template slot="price" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.id, 'price', $event)"></EditTableCell>
      </template>

      <template slot="picture" slot-scope="text,record">
        <ImageUpload :text="text" :resId="resId" :menuId="record.id" @change="onCellChangeImage(record.id, 'picture', $event)"></ImageUpload>
      </template>

      <template slot="operation" slot-scope="text,record">
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除该菜品吗？"
          @confirm="() => onDelete(record.id)"
        >
          <a ><i class="ti-trash text-danger">删除</i></a>
        </a-popconfirm>
      </template>

    </a-table>
    <a-button class="editable-add-btn" @click="handleAdd">
      添加菜品
    </a-button>
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
          width: '25%',
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
        console.log(this.dataSource);

      })
      .catch(function (err){

      })

    },
    onCellChange(key, dataIndex, value) {
      console.log(key,dataIndex,value);
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.id === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
      let params={
        [dataIndex]:value,
      };
      this.$httpM.patch(this.$api.Menu.update.replace("{id}",key), params,false)
      .then(response=>{
        this.$message.success("修改成功！");
      })
      .catch(err=>{
      })
    },
    //改变图片
    onCellChangeImage(key, dataIndex, value){
      console.log("改变图片：",key, dataIndex, value);
      const dataSource=[...this.dataSource];
      const target = dataSource.find(item => item.id === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
        console.log(target);
      }
    },
    //删除
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.id !== key);
      console.log("recordKey:"+this.dataSource[0].toString());
      this.$httpM.del(this.$api.Menu.delMenu.replace("{id}",key),false)
      .then(response=>{
        this.$message.success("删除成功！");
      })
    },
    handleAdd() {
      const { count, dataSource } = this;
      let newData = {
        name: `修改菜品名称${count}`,
        price: 1,
        recommendations: 0,
        picture: null,
        restaurant:this.resId,
      };
      //首先向后端创建一个菜品
      this.$httpM.post(this.$api.Menu.create,newData,false)
      .then(response=>{
        newData=response.data;
        this.dataSource = [...dataSource, newData];
      })
      .catch(function (err){

      });

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
