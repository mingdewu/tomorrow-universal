<template>
  <div style="margin:auto;width:70%">
    <h2>文法理論（準備中）</h2>
    <el-button 
    @click="drawer = true" 
    type="primary" 
    style="margin-left:30px">
    メモ
    </el-button>
    <div>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClink"></el-tree>
    </div>
    <el-drawer
    :with-header="false"
    :visible.sync="drawer"
    direction="ltr"
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
      drawer:false,
      innerDrawer:false,
      direction:'ltr',
      form:{
          theme :'',
          content: ''
        },
      formLabelWidth:'80px',
      timer:null,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
    };
  },

}
</script>
<style>
</style>