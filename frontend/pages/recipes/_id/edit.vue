<template>
    <el-main class="container my-5" style="margin:auto;text-align: auto;">
        <h1>レシピ</h1>
        <div class="row">
            <div class="col-12 text-center my-3" style="border-top: 1px black solid;">
                <h2 class="mb-3 display-4 text-uppercase">
                    {{recipe.name}}
                </h2>
            </div>
            <div class="col-md-6 mb-4">
                <img v-if="!preview" class="img-fluid" style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"  :src="recipe.picture">
                <img v-else class="img-fluid" style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"  :src="preview">
            </div>
            <div class="col-md-4">
                <form >
                    <div class="form-group">
                        <label for>レシピ</label>
                        <input type="text" class="form-control" v-model="recipe.name">
                    </div>
                    <div class="form-group">
                        <label for >原料</label>
                        <input type="text" v-model="recipe.ingredients" class="form-control" name="Ingredients">
                    </div>
                    <div class="form-group">
                        <label for>写真</label>
                        <input type="file" @change="onFileChange">
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <div class="form-group">
                                <label for>難易度</label>
                                <select v-model="recipe.difficuly" class="form-control">
                                    <option>簡単</option>
                                    <option>一般</option>
                                    <option>困難</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for>
                                    時間
                                    <small>（分）</small>
                                </label>
                                <input type="text" v-model="recipe.prep_time" class="form-control" name="Ingredients">
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for>レシピ</label>
                        <textarea v-model="recipe.prep_guide" class="form-control" rows="8">
                        </textarea>
                    </div>
                    <button type="submit" class="btn btn-success">保存</button>
                </form>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    head () {
        return {
            title: "編集"
        }
    },
    async asyncData ({ $axios, params }) {
        try {
            const recipe = await $axios.$get(`/recipes/${params.id}`)
            return{recipe};
        } catch(e){
            return{
                recipe: []
            };
        }
    },
    data() {
        return {
            recipe:{
                name: "",
                picture: "",
                ingredients: "",
                difficulty: "",
                prep_time: null,
                prep_guide: ""
            },
            preview:"",
        };
    },
    methods:{
       onFileChange(e){
        let files = e.target.files ||e.dataTransfer.files;
        if(!files.length){
            return;
        }
        this.recipe.picture=files[0]
        this.createImage(files[0]);
       },
       createImage(file){
        let reader =  new FileReader();
        let vm = this;
        reader.onload = e => {
            vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
       },
       async submitRecipe() {
        let editeRecipe = this.recipe
        if (editedRecipe.picture.indexOf("http://") != -1){
            delete editedRecipe["picture"]
        }
        const config = {
            headers :{"content-type": "multipart/form-data"}
        };
        let formData =new FormData();
        for (let data in editedRecipe) {
            forData.append(data,editedRecipe[data]);
        }
        try{
            let response = await this.$axios.$patch(`/recipes/${editedRecipe.id}/`,formData,config);
            this.$router.push("/recipes/");
        }
        catch (e){
            console.log(e)
        }
       }
    }
}
</script>
<style scoped>
.el-main{
    text-align: center;
}
</style>