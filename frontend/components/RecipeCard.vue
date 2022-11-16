<template>
    <div>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card class="recipe-card" :body-style="{ padding: '0px' }">
                <!-- <img :src="recipe.picture" class="card-img"> -->
                <div :body-style="{ padding: '0px' }">
                    <h5>{{recipe.name}}</h5>
                    <p>
                        <strong>Ingredients:</strong>{{recipe.Ingredients}}
                    </p>
                    <div>
                        <nuxt-link :to="`/recipes/${recipe.id}/`" >View</nuxt-link>
                        <nuxt-link :to="`/recipes/${recipe.id}/edit/`">Edit</nuxt-link>
                        <button @click="onDelete(recipe.id)" >Delete</button>
                    </div>
                </div>
            </el-card>
        </el-col>
        <!-- <div>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>カード情報</span>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
            {{'情報 ' + o }}
        </div>
        </el-card>
        </div> -->
    </div>
</template>
<script>
export default {
  props: ["recipe", "onDelete"]
}
</script>
<style>
.recipe-card{
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6)
}
.card-img{
    width:150px;
    height:250px;
    margin:auto
}
</style>