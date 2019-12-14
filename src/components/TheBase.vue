<template>
  <div class="matchingbase">
    <!-- background -->
    <div class="matching-background mg10">
      <h3>背景</h3>
      <p>顔がいけてないし、「俺は終わった」</p>
    </div>

    <!-- use -->
    <div class="matching-title-use">
      <h3>使い方</h3>
    </div>
    <TheDescription />

    <div class="matching-attention">
      <h3>注意点</h3>
      <div class="matching-subattention">
        <li>全身画像を使うんじゃ。</li>
        <li>人間をアップロードするんじゃ。エビチリとかはNG。</li>
      </div>
    </div>

    <div class="mg10">
      <p class="matching-start-button" @click="changeUrl">はじめる</p>
    </div>
  </div>
</template>

<script>
import TheDescription from './TheDescription.vue'

export default {
  name: 'thebase',
  components: {
    TheDescription
  },
  methods: {
    changeUrl: function(){
      this.$router.push('/upload', () => {}, () => {});
    }
  }
}
</script>