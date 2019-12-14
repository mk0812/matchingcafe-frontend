<template>
  <div>
    <TheDescription />
    <label class="matching-item">
      画像を選択
      <input type="file" @change="onFileChange"/>
    </label>

    <!-- preview -->
    <div class="preview-item">
      <img 
        v-show="uploadedImage"
        class="preview-item-file"
        :src="uploadedImage" 
        alt=""
      />
    </div>
    <div v-show="uploadedImage" class="preview-item-btn" @click="remove">
      <p class="preview-item-name">{{ img_name }}</p>
    </div>
    <button @click="upload" type="submit" class="matching-start-button">アップロード</button>
  </div>
</template>

<script>
import axios from 'axios';
import TheDescription from './TheDescription.vue'

export default {
  name: 'upload',
  data(){
    return {
      uploadedImage: '',
      img_name: '',
      uploadFile: null
    }
  },
  components: {
    TheDescription
  },
  methods: {
    onFileChange: function(e){
      const files = e.target.files || e.dataTransfer.files
      this.uploadFile = files[0]
      this.createImage(files[0])
      this.img_name = files[0].name
    },
    // アップロードした画像を表示
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove: function(){
      this.uploadedImage = false;
    },
    upload: function(){
      //upload
      let formdata = new FormData();
      if(!this.uploadFile) return false;
      formdata.append('data',this.uploadFile)
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        }
      };
      try {
        axios.post('http://localhost:3000/api/v1/removebg',formdata,config).then(response => {
          alert(response)
        })
      }catch(e){
        alert(e)
      }
    },
  }
}
</script>