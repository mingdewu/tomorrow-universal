<template>
    <div style="margin:5px;text-align: center">
        <el-col :span="12" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" style="text-align: center;">
            <el-card class = "lifeline-card" :body-style="{padding:'5px'}" shadow="hover">
                <img :src="lifeline.picture" class ="card-img">
                <div :body-style="{ padding: '0px' }">
                    <h5>タイトル：{{lifeline.theme}}</h5>
                </div>
                <div>
                    <nuxt-link :to="`/life_line/${lifeline.id}/`">見る</nuxt-link>
                    <nuxt-link :to="`/life_line/${lifeline.id}/edit/`">編集</nuxt-link>
                    <button @click="onDelete(lifeline.id)" >削除</button>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
    export default {
        props:["lifeline","onDelete"]
    }
</script>
<style>
.lifeline-card{
    box-shadow: 0 1rem 1.5rem rgba(141, 141, 141, 0.6)
}
.card-img{
    width:auto;
    height:350px;
    
}
.el-col{
    margin: auto;
    margin-bottom: 10px;
   
}
</style>