<template>
  <div>
    <h1>Emotion_Classification開発中</h1>
    <el-button 
      @click="drawer = true" 
      type="primary" 
      style="margin-left:30px">
      メモ
    </el-button>
    <div class="block">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          loading<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <el-drawer
    :with-header="false"
    direction ="ltr"
    :visible.sync="drawer"
    :direction="direction"
    custom-class="demo-drawer"
    size="75%"
    :before-close="handleClose"
    ref="drawer"
    >
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
        <el-button @click="$refs.drawer.closeDrawer()">取 消</el-button>
        <el-button type="primary" @click="$refs.drawer.closeDrawer()">确 定</el-button>
      </div>
    </div> 
    </el-drawer>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        src: '/images/chat.png',
        drawer:false,
        direction:'ltr',
        form:{
          theme :'',
          content: ''
        },
        formLabelWidth:'80px',
        timer:null,
      };
    },
    method:{
      handleClose(done) {
      if (this.loading) {
        return;
      }
    },
      cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
    }
  }
</script>
<style scoped>
.block{
  margin: auto;
  width: 50%;
  border: 3px solid rgb(0, 0, 0);
  padding: 5px;
}
.drawer_footer{
  text-align: center;
  margin-top:5px;
}
.rawer_content{
  margin-top: 8px;
}
el-form.rawer_content{
  margin: 8px;
}
</style>