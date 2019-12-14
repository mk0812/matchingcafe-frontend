<template>
  <div id="app" class="matching-main">
    <!-- title -->
    <div class="matching-title">
      <img src="./assets/logo.png" alt="matchingcafe">
      <h1>MatchingCafe</h1>
      <span>あなたの顔を引き出せる神偉人人間国宝アプリ</span>
    </div>

    <!-- background -->
    <div class="matching-background mg10">
      <h3>背景</h3>
      <p>顔がいけてないし、「俺は終わった」</p>
    </div>

    <!-- use -->
    <div class="matching-title-use">
      <h3>使い方</h3>
    </div>
    <div class="matching-use">
      <div>
        <v-icon name="hand-pointer" scale="4"/>
        <p>①顔写真を選びます。<span class="red">イケメンだと尚更OKです。</span></p>
      </div>
      <div>
        <v-icon name="cloud-upload-alt" scale="4"/>
        <p>②写真をアップロードします。</p>
      </div>
      <div>
        <v-icon name="thumbs-up" scale="4"/>
        <p>③素晴らしい背景とともにイケメンっぽい奴が誕生。</p>
      </div>
    </div>

    <div class="matching-attention">
      <h3>注意点</h3>
      <div>
        <li>全身画像を使うんじゃ。</li>
        <li>人間をアップロードするんじゃ。エビチリとかはNG。</li>
      </div>
    </div>

    <div class="matching-start-button mg10">
      <p>はじめる</p>
    </div>

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
    <button @click="upload" type="submit">アップロード</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data(){
    return {
      uploadedImage: '',
      img_name: '',
      uploadFile: null
    }
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
      confirm(`${this.img_name}をアップロードしますか？`)

      //upload
      let formdata = new FormData();
      formdata.append('file',this.uploadFile)
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label > input {
  display: none;
}

label {
  padding: 0 1rem;
  border: solid 1px #888;
} 

label::after {
  content: '+';
  font-size: 1rem;
  color: #888;
  padding-left: 1rem;
}
.preview-item {
  margin-top: 30px;
}
.matching-use {
  display: flex;
  justify-content: center;
  text-align: center;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}
.matching-use > div {
  width: 33%;
}
.matching-start-button p {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #2c3e50;/*背景色*/
  border-bottom: solid 2px #2c3e50;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  width: 300px;
  height: 35px;
  line-height: 2.3;
}
.matching-start-button p:active {
  border-bottom: solid 2px #2c3e50;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
.matching-title {
  margin-bottom: 100px;
}
.matching-attention li {
  
}

/* 汎用 */
.red { color: rgb(255, 79, 79) }
.mg10 { margin: 20px 0; }
</style>
