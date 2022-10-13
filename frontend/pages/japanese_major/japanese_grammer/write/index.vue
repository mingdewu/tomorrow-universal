<template>
    <div>
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
        <button type="primary">
            作文
        </button>
        <div class="input-group">
            <el-input
                placeholder=""
                v-model="output1"
                :disabled="true">
                </el-input>
      
    </div>
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
            input1: '朝日',
            output1:'朝日を浴びて車に光が反射する。'
        }
    }
}
</script>

<style>

</style>