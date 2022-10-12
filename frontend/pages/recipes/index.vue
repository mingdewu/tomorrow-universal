<template>
  <el-main>
    <!--
    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="d-flex justify-content-between">
          <h3>La Recipes</h3>
          <nuxt-link to="/recipes/add" class="btn btn-info">Add Recipe</nuxt-link>
        </div>
      </div>
      <div v-for="recipe in recipes">
        <div :key="recipe.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <recipe-card :onDelete="deleteRecipe" :recipe="recipe"></recipe-card>
        </div>
      </div>
    </div>
    -->
    <span>La Recipes</span>
      <nuxt-link to="/recipes/add" type="primary" class="rightside">Add Recipe</nuxt-link>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">a</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">b</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">c</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">d</div></el-col>
    </el-row>
  </el-main>
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