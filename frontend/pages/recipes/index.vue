<template>
  <div>
    <div>
      <div style="text-align:right; font-size:14px">
        <h3>レシピ</h3>
        <nuxt-link to="/recipes/add">レシピ追加</nuxt-link>
      </div>
    </div>
    <div v-for="recipe in recipes">
      <div :key="recipe.id">
        <recipe-card :onDelete="deleteRecipe" :recipe="recipe"></recipe-card>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "~/components/RecipeCard.vue";

export default{
    head(){
        return {
            title:"Recipes list"
        };
    },
    components:{
        RecipeCard
    },
    async asyncData({$axios,params}) {
       try{
				let recipes = await $axios.$get(`/recipes/`);
				return {recipes};
			 }catch(e){
				return { recipes:[]}
			 }
    },
    data() {
    return {
      recipes: []
    };
  },
  methods:{
   async deleteRecipe(recipe_id){
		try{
			await this.$axios.$delete(`/recipes/${recipe_id}/`);
			let newRecipes = await this.$axios.$get("/recipoes/");
			this.recipes = newRecipes;
		}	catch(e){
			console.log(e);
		}
	 }
  }
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .rightside{
    float: right;
  }
</style>