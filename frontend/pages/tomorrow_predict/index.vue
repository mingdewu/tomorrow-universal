<template>
  <div>
    <h1>「あしたのデータ収集/予測」開発中</h1>
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
  </div>
</template>
<script>
import WorldCard from "~/components/WorldCard.vue";
export default {
  head(){
        return {
            title:"Recipes list"
        };
    },
    components:{
        WorldCard
    },
  data () {
    return {
      options: [{
        value: 'contry1',
        label: '国1'
      }, {
        value: 'contry2',
        label: '国2'
      }, {
        value: 'contry3',
        label: '国3'
      }, {
        value: 'contry4',
        label: '国4'
      }, {
        value: 'contry5',
        label: '国5'
      }],
      options2: [{
        value: 'param1',
        label: 'パラメータ1'
      }, {
        value: 'param2',
        label: 'パラメータ2'
      }, {
        value: 'param3',
        label: 'パラメータ3'
      }, {
        value: 'param4',
        label: 'パラメータ4'
      }, {
        value: 'param5',
        label: 'パラメータ5'
      }],
      value1: '',
      value2: ''
    }
  },
}
</script>
<style>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    float:right;
    width:75%;
  }
.paramstyle{
  float:left;
  width:25%;
  border:1px solid black;
}
</style>