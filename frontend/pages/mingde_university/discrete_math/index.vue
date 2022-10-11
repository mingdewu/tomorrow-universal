<template>
  <div>
    <h1>準備中</h1>
    <div>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClink"></el-tree>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        label: '集合',
        children: [{
          label: '集合定義と演算',
          children: [{
            label: '集合定義'
          }]
        },
        {
          label: '写像とその合成'
        },
        {
          label: '代数系'
        }
        ]
      }, {
        label: '命題倫理と述語倫理',
        children: [{
          label: '複合命題',
          children: [{
            label: '命題計算'
          }]
        }, {
          label: '含意と推論',
          children: [{
            label: '三级 2-2-1'
          }]
        },
        {
          label: '述語倫理',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>