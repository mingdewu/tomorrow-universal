<template>
    <div>
      <a>作文azAZ</a>
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
      v-model="input"
      placeholder="">
      </el-input>  
      <p></p>
      <div class="input-group">
        <span class="input-group-text">文章</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button>進もう</button>
      <br />
      <div class="input-group">
        <span class="input-group-text">正しいかも</span>
        <textarea class="form-control" aria-label="With textarea">研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に取り組むことができます。</textarea>
      </div>
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
        input:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に＿＿ことができます。'
      }
    }
  }
</script>

<style>

</style>