<template>
  <div>
    <h1>Emotion_Classification開発中</h1>
    <div class="block">
     
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          loadi\ng<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        src: '/images/chat.png'
      }
    }
  }
</script>
<style scoped>
.block{
  margin: auto;
  width: 50%;
  border: 3px solid rgb(0, 0, 0);
  padding: 5px;
}
</style>