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
      <div>
          <el-button type="primary" @click="innerDrawer = true" id="write-b">書き</el-button>
          <el-drawer
            :append-to-body="true"
            direction ="ltr"
            size="50%"
            :before-close="handleClose"
            :with-header="false"
            :visible.sync="innerDrawer"
            custom-class="demo-drawer"
            ref="innerDrawer">
            <div class="drawer_content">
                  <h1>メモ</h1>
                  <el-form  :model="form" class="drawer_content">
                    <el-form-item label="主题" :label-width="formLabelWidth">
                      <el-input
                      v-model="form.theme"
                      autocomplete="off">
                    </el-input>
                    </el-form-item>
                    <el-form-item label="内容" :label-width="formLabelWidth">
                      <el-input  
                        type="textarea" 
                        v-model="form.content" 
                        autocomplete="off"  
                        :autosize="{ minRows: 10, maxRows: 14}">
                      </el-input>
                    </el-form-item>
                  </el-form>
                  <div class="drawer_footer">
                    <el-button @click="$refs.innerDrawer.closeDrawer()">取 消</el-button>
                    <el-button type="primary" @click="$refs.innerDrawer.closeDrawer()">确 定</el-button>
                  </div>
                </div> 
          </el-drawer>
        </div>
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
            direction:'ltr',
            innerDrawer:false,
            form:{
              theme :'',
              content: ''
            },
            formLabelWidth:'80px',
            timer:null,
            }
        },
    method:{
      handleClose(done){
        if (this.loading){
          return;
        }
      },
      cancleForm(){
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      }
    }
}
</script>
<style>

</style>