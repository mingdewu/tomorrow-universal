<template>
    <div>
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
      <div class="input-group">
        <span class="input-group-text">正しい一</span>
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
        textarea1:"商品の存在価値を伝える、お客様の市場価値を高める役割を担います。",
        teztarea2:"商品の存在価値を伝え、お客様の市場価値を高める役割を担います。"
      }
    }
  }
</script>
<style scoped>
 h5 {text-decoration: underline;}
 h5 a {color:#ff0000;}
</style>