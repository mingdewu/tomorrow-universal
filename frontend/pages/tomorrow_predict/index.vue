<template>
  <div>
    <h1>「あしたのデータ収集/予測」開発中</h1>
    <el-button 
    @click="drawer = true" 
    type="primary" 
    style="margin-left:30px">
    メモ
    </el-button>
    <el-aside class="paramstyle">
      <div>
        <div>
          <el-tag>パラメータ</el-tag>
        </div>
        <el-select
          v-model="value1"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="国を選択"
        >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
        </el-select>
        </div>
        <div>
          <div>
            <el-tag>パラメータ</el-tag>
          </div>
          <el-select
          v-model="value2"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="パラメータを選択"
        >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
        </el-select>
        </div>
      </el-aside>
    <el-main> 
      <div>
        <world-card></world-card>
      </div> 
    </el-main>
    <el-drawer
      :with-header="false"
      :visible.sync="drawer"
      :direction="direction"
      size="75%"
      :before-close="handleClose"
      >
      <div class="drawer_content">
        <h1>メモ</h1>
      </div>
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
import WorldCard from "~/components/WorldCard.vue";
export default {
  head(){
        return {
            title:"Country list"
        };
    },
    components:{
        WorldCard
    },
  data () {
    return {
      options: [{
        value: 'Japan',
        label: '日本'
      }, {
        value: 'Indian',
        label: 'インド'
      }, {
        value: 'Germany',
        label: 'ドイツ'
      }, {
        value: 'Canada',
        label: 'カナダ'
      }, {
        value: 'Russia',
        label: 'ロシア'
      }],
      options2: [{
        value: 'GDPGrowthRate',
        label: 'GDPGrowthRate'
      }, {
        value: 'FoodInflation',
        label: 'FoodInflation'
      }, {
        value: 'CPICore',
        label: 'CPICore'
      }, {
        value: 'ExportPrices',
        label: 'ExportPrices'
      }, {
        value: 'MinimumWages',
        label: 'MinimumWages'
      }],
      value1: '',
      value2: '',
      innerDrawer:false,
      drawer:false,
      direction:'ltr',
      form:{
          theme :'',
          content: ''
        },
      timer:null
    }
  },
}
</script>
<style>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    width:75%;
  }
.paramstyle{
  float:left;
  width:25%;
  border:1px solid black;
}
el-drawer title {
  margin:auto
}
</style>