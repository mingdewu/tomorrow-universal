<template>
  <div style="margin:auto;width:70%">
    <h2>文法理論（準備中）</h2>
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
        label: '１、自然言語',
        children: [{
          label: '音の規則',
        },
        {
          label: '記号の規則'
        },
        {
          label: '意味の規則',
        },
        {
          label: '自然言語関と関連分野',
        }
        ]
      }, {
        label: '２、古典的生成文法',
        children: [{
          label: 'アメリカ構造理論',
          children: [{
            label: '構造理論の革命'
          }]
        }, 
        {
          label: '文法の変形',
        },
        {
          label: '生成音韻論',
        }]
      }, 
      {
        label: '３、近代の生成文法',
        children: [{
          label:'形態論'
        },
          {label:'辞書の構造'
        },
          {
          label: '語彙の規則と機能',
        }, {
          label: '句の構造',
        }]
      }, 
      {
        label: '４、意味論と意味解析',
        children: [{
          label: '意味論と表現',
        }, {
          label: '意味解析',
        },
      ]}
    ],
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