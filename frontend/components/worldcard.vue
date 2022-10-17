<template>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>日本</span>
    <el-button style="float: right; padding: 3px 0" type="text">詳細</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'data ' + o }}
  </div>
</el-card>
</template>

<script>
</script>

<style>
.text {
font-size: 14px;
}

.item {
margin-bottom: 2px;
}

.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}

.box-card {
width: 320px;
height: 200px;
}
</style>