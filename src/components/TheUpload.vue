<template>
  <div id="upload">
    <TheDescription />
    <label class="matching-item">
      画像を選択
      <input
        type="file"
        name="image"
        accept="image/*"
        style="font-size: 1.2em; padding: 10px 0;"
        @change="setImage"
      >
    </label>

    <!-- preview -->
    <div class="preview-item">
      <vue-cropper
        v-if="imgSrc"
        ref="cropper"
        :guides="true"
        :view-mode="2"
        drag-mode="crop"
        :auto-crop-area="0.5"
        :background="true"
        :rotatable="false"
        :src="imgSrc"
        alt="Source Image"
        :img-style="{ 'width': '400px', 'height': '300px' }"
        :aspect-ratio="1"
      ></vue-cropper>
    </div>

    <div class="preview-edit" v-if="cropImg">
      <h3>編集画像</h3>
      <img :src="cropImg" alt="Cropped Image">
    </div>
    <button @click="cropImage" v-if="imgSrc != ''" class="matching-start-button">編集完了</button>
    <button @click="upload" type="submit" class="matching-start-button">アップロード</button>
    <button @click="selectBg">get</button>
    <button @click="ultimateFusion">ultimateFusion</button>
  </div>
</template>

<script>
import axios from 'axios';
import TheDescription from './TheDescription.vue'
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: 'upload',
  data(){
    return {
      imgSrc: "",
      cropImg: "",
      bgFileName: '01.jpg',
      tag: 'front'
    }
  },
  components: {
    TheDescription,
    VueCropper
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          //this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    upload: function(){
      //upload
      let formdata = new FormData();
      formdata.append('data',this.cropImg) //cropImg .. data:base64
      console.log(this.cropImg)
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        }
      };
      try {
        axios.post('http://localhost:3000/api/v1/removebg',formdata,config).then(response => {
          console.log(response)
        })
      }catch(e){
        console.log(e)
      }
    },
    selectBg: function(){
      axios.get('http://localhost:3000/api/v1/removebg/selectBg/output.png').then((response) => {
        console.log(response)
        this.tag = response.data.tag
      })
    },
    ultimateFusion: function(){
      axios.post('http://localhost:3000/api/v1/removebg/editimage/output.png',{
        "grayscale":"true","top":"100","left":"350", "tag": this.tag
      }).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
.preview-edit {
  margin: 50px 0;
}
</style>