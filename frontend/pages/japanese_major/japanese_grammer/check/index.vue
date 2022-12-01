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
        size = 75%
        :visible.sync="drawer"
        :with-header="false">
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
    data() {
      return {
        textarea1:"商品の存在価値を伝える、お客様の市場価値を高める役割を担います。",
        textarea2:"商品の存在価値を伝え、お客様の市場価値を高める役割を担います。",
        drawer: false,
        innerDrawer:false,
        form:{
          theme :'',
          content: ''
        },
        formLabelWidth:'80px',
        timer:null,
      };
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
<style scoped>
 h5 {text-decoration: underline;}
 h5 a {color:#ff0000;}
 nav {font-size: 26px;}
 #write-b {margin:20px}
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
  margin-right: 5px;
}
</style>