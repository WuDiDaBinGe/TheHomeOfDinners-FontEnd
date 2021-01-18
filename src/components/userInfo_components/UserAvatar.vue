<template>
<a-upload
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action=""
    :before-upload="beforeUpload"
    :customRequest="uploadAvator"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'" />
      <div class="ant-upload-text">
        Upload
      </div>
    </div>
  </a-upload>
</template>

<script>
import {setLocalStore} from "../../assets/storage/localstorage";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: "UserAvatar",
  props:['userId'],
  data() {
    return {
      loading: false,
      imageUrl: '',
    };
  },
  watch:{
    imageUrl:function (newValue){
      this.$message.success("上传成功！");
      this.$emit("changeAva",newValue);
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          //this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 1MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    uploadAvator(file){
      var tmpThis=this;
      var formData=new FormData();
      formData.append('picture', file.file,file.name);
      this.$httpM.put(this.$api.User.uploadAvtor.replace("{id}",this.userId),formData,false)
      .then(function (response){
        tmpThis.imageUrl=response.data.picture;

      })
      .catch(function (err){

      })

    }
  },
}
</script>

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
