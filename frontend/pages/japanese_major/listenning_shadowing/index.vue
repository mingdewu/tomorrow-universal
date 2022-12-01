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