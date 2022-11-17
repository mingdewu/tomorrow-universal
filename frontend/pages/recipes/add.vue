<template>
    <el-main style="margin:auto;text-align: auto;">
      <h1>レシピ</h1>
      <div>
        <div class="col-12" style="border-top: 1px black solid;">
          <h2 class="mb-3 display-4 text-uppercase">{{ recipe.name }}</h2>
        </div>
        <div>
          <img
            v-if="preview"
            class="img-fluid"
            style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            :src="preview"
            alt
          >
          <img
            v-else
            class="img-fluid"
            style="width: 400px;height: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            src="@/static/images/1011.jpg"
          >
        </div>
        <div>
          <form @submit.prevent="submitRecipe">
            <div class="form-group">
              <label for>レシピ名</label>
              <input type="text" class="form-control" v-model="recipe.name">
            </div>
            <div class="form-group">
              <label for>原料</label>
              <input v-model="recipe.ingredients" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for>写真</label>
              <input type="file" name="file" @change="onFileChange">
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for>難易度</label>
                  <select v-model="recipe.difficulty" class="form-control">
                    <option value="Easy">簡単</option>
                    <option value="Medium">一般</option>
                    <option value="Hard">困難</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for>
                    準備時間
                    <small>(分)</small>
                  </label>
                  <input v-model="recipe.prep_time" type="number" class="form-control">
                </div>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for>ナビ</label>
              <textarea v-model="recipe.prep_guide" class="form-control" rows="8"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">提出</button>
          </form>
        </div>
      </div>
    </el-main>
  </template>
  <script>
  export default {
    head() {
      return {
        title: "追加レシピ"
      };
    },
    data() {
      return {
        recipe: {
          name: "",
          picture: "",
          ingredients: "",
          difficulty: "",
          prep_time: null,
          prep_guide: ""
        },
        preview: ""
      };
    },
    methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.recipe.picture = files[0];
        this.createImage(files[0]);
      },
      createImage(file) {
        // let image = new Image();
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      async submitRecipe() {
        const config = {
          headers: { "content-type": "multipart/form-data" }
        };
        let formData = new FormData();
        for (let data in this.recipe) {
          formData.append(data, this.recipe[data]);
        }
        try {
          let response = await this.$axios.$post("/recipes/", formData, config);
          this.$router.push("/recipes/");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  </script>
  <style scoped>
  .el-main{
    text-align: center;
    
  }
  </style>