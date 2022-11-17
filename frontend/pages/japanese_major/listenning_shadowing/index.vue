<template>
    <div>
      <h1>「ドラマシャドーイング」開発中</h1>
      <el-button 
      @click="drawer = true" 
      type="primary" 
      style="margin-left:30px">
      メモ
    </el-button>
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
          return{
            drawer:false,
            direction:'ltr'
          }
      }
  }
  </script>
  <style>
  
  </style>