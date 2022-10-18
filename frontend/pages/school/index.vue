<template>
    <div>
        <div>
            <h3>this is a school record</h3>
            <nuxt-link to="/schoolworks/add">
            增加学习记录
            </nuxt-link>
        </div>
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
      title: 'waterplants list'
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
        schoolworks: data
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