<template>
    <!--
<div class="card recipe-card">
        <img :src="recipe.picture" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{recipe.name}}</h5>
            <p class="card-text">
                <strong>Ingredients:</strong>{{recipe.Ingredients}}
            </p>
            <div class ="action-buttons">
                <nuxt-link :to="`/recipes/${recipe.id}/`" class="btn btn-sm btn-success">View</nuxt-link>
                <nuxt-link :to="`/recipes/${recipe.id}/edit/`" class="btn btn-sm btn-primary">Edit</nuxt-link>
                <button @click="onDelete(recipe.id)" class="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    </div>
    -->
    <div>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
        </el-card>
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
</style>