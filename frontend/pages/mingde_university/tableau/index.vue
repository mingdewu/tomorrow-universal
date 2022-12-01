<template>
  <div style="margin:auto;width:70%">
    <h2>Tableau（準備中）</h2>
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
      title="タイトル"
      :visible.sync="drawer"
      :direction="direction"
      size="75%"
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
        label: '１、数据可视化',
        children: [{
          label: '数据的内在含义',
        },
        {
          label: '在数据中寻找',
        },
        {
          label: '数据可视化常见应用领域',
        }    ]
      }, {
        label: '２、了解Tableau',
        children: [{
          label: 'Tableau各种产品',
          children: [{
            label: 'Tableau优势',
          }]
        }, 
        {
          label: 'Tableau功能介绍',
        }]
      }, 
      {
        label: '３、基本操作和相关可视化图形',
        children: [{
          label:'数据排序与观察',
        },
          {label:'数据分层与分组',
        },
          {
          label: '语法与函数',
        }]
      }, 
      {
        label: '４、基本可视化图形',
      },
      {
        label: '５、仪表板',
        children: [{
          label:'创建仪表板',
        },{
          label:'设计仪表板',
        }]
      }, 
      {
        label: '６、功能性',
        children: [{
          label:'地图',
        },{
          label:'图表美化方法',
        },{
          label:'动态仪表板',
        },{
          label:'Tableau Server分享'
        }]
      },
      {
        label: '７、实际应用',
        children: [{
          label:'EC订单可视化分析',
        },{
          label:'楼价可视化分析',
        },{
          label:'网站可视化分析',
        },{
          label:'交通可视化分析',
        }]
      },
    ],
      drawer:false,
      innerDrawer:false,
      direction:'ltr',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form:{
          theme :'',
          content: ''
        },
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>