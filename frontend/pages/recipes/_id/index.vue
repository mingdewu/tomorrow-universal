<template>
    <main>
        <div style="text-align:center; font-size:20px">
            <div>
                <h2>料理{{recipe.name}}</h2>
            </div>
            <div >
                <img
                class="img-fluid"
                style="width:400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
                :src="recipe.picture"
                alt
                >
            </div>
            <div>
                <div class="recipe-details">
                    <h4>原料</h4>
                    <p>{{ recipe.ingredients }}</p>
                    <h4>準備時間 ⏱</h4>
                    <p>{{ recipe.prep_time }} 分</p>
                    <h4>難易度</h4>
                    <p>{{ recipe.difficulty }}</p>
                    <h4>ナビ</h4>
                    <textarea rows="10" v-html="recipe.prep_guide" disabled />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default{
    head(){
        return {
            title:"レシピ"
        };
    },
    async asyncData({$axios,params}){
        try{
            let recipe = await $axios.$get(`/recipes/${params.id}`);
            return {recipe};
        } catch (e) {
            return { recipe: []};
        }
    },
    data(){
        return{
            recipe:{
                name: "",
                picture: "",
                ingredients: "",
                difficulty: "",
                prep_time: null,
                prep_guide: ""  
            }
        }
    }
}
</script>
<style scope>
</style>