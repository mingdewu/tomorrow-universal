<template>
    <div style="margin:auto;width:50%">
      <nav>
      <ul>
        <li>
          <NuxtLink to="/japanese_major/japanese_grammer/check">文法修正</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/japanese_major/japanese_grammer/write">作文</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/japanese_major/japanese_grammer/complete">埋め込み</NuxtLink>
        </li>
      </ul>
    </nav>
  <NuxtChild  />
      <h1>埋め込み</h1>
      <el-button 
        
        @click="drawer = true" 
        type="primary" 
        style="margin-left:30px">
        メモ
      </el-button>
      <div>
        <el-tag type="success">こん感じ文章を入力！</el-tag>
      </div>
      <el-input
        v-model="input1"
        placeholder="">
      </el-input>  
      <el-button type="primary">埋め込み</el-button>
      <br />
      <el-input
        readonly
        v-model="input2"
        placeholder="">
      </el-input>  
      <el-drawer
        direction ="ltr"
        size = 66.6%
        title="タイトル"
        :visible.sync="drawer"
        :with-header="false">
        <h1>メモ</h1>
      </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
      return {
        input1:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に＿＿ことができます。',
        input2:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に取り組むことができます。',
        drawer:false,
        direction:'ltr'
      }
    }
  }
</script>

<style>

</style>