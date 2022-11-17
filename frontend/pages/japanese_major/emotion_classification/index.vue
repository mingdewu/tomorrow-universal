<template>
  <div>
    <h1>Emotion_Classification開発中</h1>
    <el-button 
      @click="drawer = true" 
      type="primary" 
      style="margin-left:30px">
      メモ
    </el-button>
    <div class="block">
     
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          loading<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <el-drawer
    :with-header="false"
    direction ="ltr"
    title="タイトル"
    :visible.sync="drawer"
    :direction="direction"
    size="75%"
    >
    <h1>メモ</h1>
    </el-drawer>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        src: '/images/chat.png',
        drawer:false,
        direction:'ltr'
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