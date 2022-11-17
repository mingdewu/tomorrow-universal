<template>
  <div  style="margin:auto;width:70%">
    <h2>「楽典」準備中</h2>
    <el-button 
    @click="drawer = true" 
    type="primary" 
    style="margin-left:30px">
    メモ
    </el-button>
    <div id="app-7">
      <ol>
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>
    <el-drawer
    :with-header="false"
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
export default{
  data (){
    return {
      drawer:false,
      direction:'ltr'
    }
  }
}
</script>