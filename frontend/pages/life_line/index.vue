<template>
  <div>
    <h1>ライフ ライン(life line)開発中</h1>
    <el-button 
      :with-header="false"  
      @click="dialog = true" 
      type = "primary" 
      style="margin-left:30px;">
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
    :visible.sync="dialog"
    direction="ltr"
    custom-class="demo-drawer"
    size="75%"
    :before-close="handleClose"
    ref="drawer">
      <div class="drawer_content">
        <h1>メモ</h1>
      </div>
      <div>
        <el-button type="primary" @click="innerDrawer = true" id="write-b">書き</el-button>
        <div v-for="lifeline in life_line">
          <div :key="lifeline.id">
            <lifeline-card :onDelete="deletelifeline" :lifeline="lifeline"></lifeline-card>
          </div>
        </div>
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
              <el-button @click="$refs.innerDrawer.closeDrawer()">キャンセル</el-button>
              <el-button type="primary" @click="$refs.innerDrawer.closeDrawer()">确 定</el-button>
            </div>
          </div> 
        </el-drawer>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import LifeLineCard from '~/components/LifeLineCard.vue';
export default {
  head(){
    return{
      title:"life_line"  
    }
  },
  comments:{
    LifeLineCard
  },
  async asyncData({$axios,params}){
    try{
      let life_line = await $axios.$get('/life_line');
      return {life_line};
    }catch(e){
      return { life_line:[]}
    }
  },
    data(){
      return {
        life_line:[],
        src: '/images/lifeline.png',
        drawer:false,
        innerDrawer:false,
        dialog:false,
        form:{
          theme :'',
          content: ''
        },
        formLabelWidth:'80px',
        timer:null
      };
    },
    method:{
      async deletelifeline(lifeline_id){
        try{
          await this.$aos.$delete(`/life_line/${lifeline_id}/`);
          let newlife_line = await this.$axios.$get("/life_line/");
          this.recipes = newlife_line;
        } catch(e){
          console.log(e);
        }
      },
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
  width: 40%;
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