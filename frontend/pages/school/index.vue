<template>
    <div>
        <div>
            <h3>this is a school record</h3>
            <nuxt-link to="/schoolworks/add">
              增加学习记录
            </nuxt-link>
            <el-button
              :with-header="false"  
              @click="dialog = true" 
              type = "primary" 
              style="margin-left:30px;">
              記録
            </el-button>
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
        </el-drawer>
        <div v-for="schoolwork in schoolworks">
            <div :key="schoolwork.id" >
                <school-work-card :onDelete="deleteschoolwork" :schoolwork="schoolwork"></school-work-card>
            </div>
        </div>
    </div>
</template>
<script>
import SchoolWork from '~/components/SchoolWork.vue'

const sampleData = [
  {
    id: 1,
    classify: "math",
    name: 'xilin',
    picture: '/images/banner.jpg',
    difficulty: '简单',
    date:'5ri',
    study_quality: '好'
  },
  {
    id: 2,
    classify: "math",
    name: 'xilin',
    picture: '/images/banner.jpg',
    difficulty: '简单',
    date:'5ri',
    study_quality: '好'
  },
  {
    id: 3,
    classify: "math",
    name: 'xilin',
    picture: '/images/banner.jpg',
    difficulty: '简单',
    date:'5ri',
    study_quality: '好'
  }
]
export default {
  head () {
    return {
      title: 'school'
    }
  },
  components: {
    SchoolWork
  },
  data () {
    return {
      schoolworks: []
    }
  },
  asyncData (context) {
    let data = sampleData
    return {
        schoolworks: data,
        drawer:false,
        innerDrawer:false,
        form:{
          theme:'',
          content:''
        },
    }
  },
  methods: {
    deleteschoolwork (schoolwork_id) {
      console.log(deleted`${schoolwork.id}`)
    }
  }
}
</script>

<style scoped>
</style>