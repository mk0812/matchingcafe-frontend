<template>
  <div id="app" class="matching-main">
    <!-- title -->
    <div class="matching-title">
      <img src="./assets/logo.png" alt="matchingcafe">
      <h1>MatchingCafe</h1>
      <span>自分にあったアイコン作成アプリ</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  
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
.matching-start-button{
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
  cursor: pointer;
}
.matching-start-button p:active {
  border-bottom: solid 2px #2c3e50;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
.matching-title {
  margin-bottom: 100px;
}
.matching-subattention {
  display: inline-block;
  text-align: left;
}
.matching-attention li {
  
}
.matching-use div svg {
    height: 80px;
}
/* 汎用 */
.red { color: rgb(255, 79, 79) }
.mg10 { margin: 20px 0; }
</style>
