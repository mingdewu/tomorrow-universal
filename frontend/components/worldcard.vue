<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>日本</span>
      <el-button style="float: right; padding: 3px 0" type="text">詳細</el-button>
    </div>
    <div v-for="param in params" :key="param" class="text item">
      {{param.label}}:{{param.value}}
    </div>
  </el-card>
</template>

<script>
export default {
  data(){ 
    return {
    params: [{ label: 'GDPGrowthRate' ,value:'0.9(percent)'}, 
              { label: 'FoodInflation' ,value:'4.7(percent)'},
              { label: 'CPICore' ,value:'1.6(precent)'},
              { label: 'ExportPrices' ,value:'188(points)'},
              { label: 'MinimumWages' ,value:'930(JPY/Hour)'},
            ]
  }
  }
}
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