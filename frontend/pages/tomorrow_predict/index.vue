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
    title="タイトル"
    :visible.sync="drawer"
    :direction="direction"
    size="75%"
    >
      <span>内容</span>
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
      drawer:false,
      direction:'ltr'
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