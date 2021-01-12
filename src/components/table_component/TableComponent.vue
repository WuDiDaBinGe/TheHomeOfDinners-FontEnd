<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">
      添加菜品
    </a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template slot="name" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.key, 'name', $event)"></EditTableCell>
      </template>

      <template slot="price" slot-scope="text,record">
        <EditTableCell :text="text" @change="onCellChange(record.key, 'price', $event)"></EditTableCell>
      </template>
      <template slot="picture" slot-scope="text,record">
        <ImageUpload :text="text" @change="onPictureChange"></ImageUpload>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除该菜品吗？"
          @confirm="() => onDelete(record.key)"
        >
          <a ><i class="ti-trash text-danger">删除</i></a>
        </a-popconfirm>
      </template>

    </a-table>
  </div>
</template>

<script>
import EditTableCell from "./EditTableCell";
export default {
  name:"TableComponent",
  components: {
    EditTableCell,
  },
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          price: '32',
          recommendations: '2',
          picture:'http://39.96.37.82:8888/pictures/menu/%E7%89%9B%E8%82%89%E7%B2%89.jpg',
        },
        {
          key: '1',
          name: 'Edward King 1',
          price: '32',
          recommendations: '3',
          picture: 'http://39.96.37.82:8888/pictures/menu/%E7%89%9B%E8%82%89%E7%B2%89.jpg',
        },
      ],
      count: 2,
      columns: [
        {
          title: '菜品名称',
          dataIndex: 'name',
          width: '30%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: '价格',
          dataIndex: 'price',
          width: '25%',
          scopedSlots: { customRender: 'price' },
        },
        {
          title: '推荐次数',
          dataIndex: 'recommendations',
        },
        {
          title: '菜品图片',
          dataIndex: 'picture',
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
  methods: {
    onPictureChange(){
      //待添加
    },
    onCellChange(key, dataIndex, value) {
      console.log(value);
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        price: 32,
        recommendations: `London, Park Lane no. ${count}`,
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
