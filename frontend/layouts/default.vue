<template>
    <div>
      <el-header>
        <nuxt-link class="" to="/japanese_major">
        日本語 専攻
        </nuxt-link>
        <nuxt-link class="" to="/life_line">
        /ライフ ライン
        </nuxt-link>
        <nuxt-link class="" to="/mingde_university">
        <a>/呉 明徳 研究室</a>
        </nuxt-link>
        <nuxt-link class="" to="/tomorrow_predict">
        /世界データ収集予測
        </nuxt-link>
        <nuxt-link class="" to="/recipes">
          /食物
        </nuxt-link>
        <nuxt-link class="" to="/school">
          /学习
        </nuxt-link>
      </el-header>
      <div style="text-align:right">
        <el-dropdown >
            <el-button type="primary">
              言語<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>日本語</el-dropdown-item>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
              <el-dropdown-item>한국어</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        <nuxt />
      </div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Home page'
    }
  }
}
</script>
<style>
  header {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.2)
      ),
      url("/images/1011.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
    margin: auto;
    font-size:30px;
    text-align:center;
  }
  .right-btn{
    float:right;
    margin-right:5px;
  }
  .text-box {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: #fff;
  }
  .text-box h1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 5rem;
  }
  .text-box p {
    font-size: 2rem;
    font-weight: lighter;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>