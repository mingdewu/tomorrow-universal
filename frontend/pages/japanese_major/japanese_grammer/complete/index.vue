<template>
    <div>
      <h1>埋め込み</h1>
      <span>モデル選択</span>
      <el-select v-model="value" placeholder="モデル選択">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >
        </el-option>
      </el-select>
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
    </div>
</template>

<script>
export default {
    data() {
      return {
        options:[{
          value:"model1",
          label:"model1"
        },{
          value:"model2",
          label:"model2"
        },{
          value:"model3",
          label:"model3"
        }],
        value:'',
        input1:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に＿＿ことができます。',
        input2:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に取り組むことができます。'
      }
    }
  }
</script>

<style>

</style>