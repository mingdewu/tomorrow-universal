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
    <el-button 
    type="primary"
    @click="drawer = true"
    style="margin-left: 16px;">
    メモ</el-button>
  <NuxtChild  />
    <h1>文法修正</h1>
      <div class="input-group">
        <span class="input-group-text">日本語入力</span>
        <el-input
        type="text"
        :row="5"
        autosize
        maxlength="50"
        placeholder=""
        v-model="textarea1"
        ></el-input>
      </div>
      <h5>商品の存在価値を伝え<a>る</a>、お客様の市場価値を高める役割を担います。</h5>
      <el-button type="primary">チェック</el-button>
      <div class="input-group">
        <el-input
        type="text"
        :row="5"
        autosize
        readonly
        maxlength="50"
        placeholder=""
        v-model="textarea2"
        ></el-input>
      </div>
      <el-drawer
        direction ="ltr"
        size = 66.6%
        title="我是标题"
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
        textarea1:"商品の存在価値を伝える、お客様の市場価値を高める役割を担います。",
        teztarea2:"商品の存在価値を伝え、お客様の市場価値を高める役割を担います。",
        drawer: false,
      }
    }
  }
</script>
<style scoped>
 h5 {text-decoration: underline;}
 h5 a {color:#ff0000;}
 nav {font-size: 26px;}
</style>