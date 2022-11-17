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
      @click="drawer = true" 
      type="primary" 
      style="margin-left:30px">
      メモ
    </el-button>
    <NuxtChild />
    <h1>作文</h1>
    <div class="form-check">
      <el-tag>語彙入力</el-tag>
      <el-input v-model="input1" placeholder=""></el-input>
    </div>
    <div>
      <el-tag>キーワード</el-tag>
      <el-select v-model="value1" multiple placeholder="キーワード">
        <el-option
        v-for="item in givens"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </div>
    <br />
    <el-button type="primary">
        作文
    </el-button>
    <div class="input-group">
      <el-input
        placeholder=""
        v-model="output1"
        :disabled="true">
      </el-input>
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
export default {
    data(){
        return{
            givens:[{
                value:'朝日',
                label:'朝日'
            }],
            value1:'',
            input1: 'キーワード',
            output1:'朝日を浴びて車に光が反射する。',
            drawer:false,
            direction:'ltr'
        }
    }
}
</script>
<style>

</style>