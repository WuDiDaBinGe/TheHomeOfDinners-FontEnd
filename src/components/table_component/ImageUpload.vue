<template>
  <div class="clearfix">
    <a-upload
      action=""
      list-type="picture-card"
      :file-list="fileList"
      :customRequest="uploadImage"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 1">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  name:"ImageUpload",
  props:['text','resId','menuId'],
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: this.text,
        },
      ],
      resposeUrl:"",
    };
  },
  watch:{
    resposeUrl:function(newValue){
      console.log("watch:"+newValue);
      this.resposeUrl=newValue;
      this.$emit('change', newValue);
    }
  },
  methods: {
    //上传图片
    uploadImage(file){
      var tmpThis=this;
      var formData=new FormData();
      formData.append('picture', file.file,file.file.name);
      console.log("上传图片！");
      console.log(formData);
      this.$httpM.patch(this.$api.Menu.update.replace("{id}",this.menuId),formData,false)
      .then(function (response){
        tmpThis.resposeUrl=response.data.picture;
        console.log(tmpThis.resposeUrl);

        console.log("change触发");
      })
      .catch(function (err){

      });
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    //上传图片的回调方法
    handleChange({ fileList }) {
      this.fileList = fileList;
      console.log(this.fileList[0]);
      //这里添加上传图片的方法

    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>

