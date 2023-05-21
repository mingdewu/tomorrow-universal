<template>
  <div>
    <!-- <img :src="recipe.picture"/> -->
    <div>
      <h5>{{ recipe }}</h5>
      <h5>{{ recipe.name }}</h5>
      <p >
        <strong>成分:</strong>
        {{ recipe.ingredients }}
      </p>
      <div>
        <nuxt-link :to="`/recipes/${recipe.id}/`" >查看</nuxt-link>
        <nuxt-link :to="`/recipes/${recipe.id}/edit/`" >编辑</nuxt-link>
        <button @click="onDelete(recipe.id)" >删除</button>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipe", "onDelete"]
};
</script>

<style>
.card-img-top {
  height: 12rem;
  width: 100%;
}
</style>