<template>
  <div>
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