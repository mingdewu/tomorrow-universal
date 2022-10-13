<template>
    <div>
      <h1>ライフ ライン(life line)開発中</h1>
      <div class="block">
      
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        src: '/images/lifeline.png'
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