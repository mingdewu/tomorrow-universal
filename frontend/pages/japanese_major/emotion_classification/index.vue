<template>
    <div>
      <h1>Emotion_Classification開発中</h1>
      <div class="block">
        <el-img
        :src="url"
        style="width: 100px; height: 100px">
        </el-img>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        fit: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>