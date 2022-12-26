<template>
    <el-main style="margin:auto;text-align: auto;">
      <h1>レシピ</h1>
      <div>
        <div class="col-12" style="border-top: 1px black solid;">
          <h2 class="mb-3 display-4 text-uppercase">{{ schoolwork.title }}</h2>
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
          <form @submit.prevent="submitSchoolwork">
            <div class="form-group">
              <label for>タイトル</label>
              <input type="text" class="form-control" v-model="schoolwork.title">
            </div>
            <div class="form-group">
              <label for>分類</label>
              <input v-model="schoolwork.classify" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for>写真</label>
              <input type="file" name="file" @change="onFileChange">
            </div>
            <div class="form-group mb-3">
              <label for>日付</label>
              <textarea v-model="schoolwork.date" class="form-control" rows="8"></textarea>
            </div>
            <div class="form-group mb-3">
              <label for>内容</label>
              <textarea v-model="schoolwork.content" class="form-control" rows="8"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">確認</button>
          </form>
        </div>
      </div>
    </el-main>
  </template>
  <script>
  export default {
    head() {
      return {
        title: "記録追加"
      };
    },
    data() {
      return {
        schoolwork: {
          title: "",
          picture: "",
          classify: "",
          date: "",
          content: null
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
        this.schoolwork.picture = files[0];
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
        for (let data in this.schoolwork) {
          formData.append(data, this.schoolwork[data]);
        }
        try {
          let response = await this.$axios.$post("schoolworks/", formData, config);
          this.$router.push("/schoolworks/");
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