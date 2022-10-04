<template>
    <div>
      <header>
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
        <nuxt-link class="" to="/waterplants">
          /水物
        </nuxt-link>
        <div class="dropdown right-btn">
          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            言語
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">链接 1</a></li>
            <li><a class="dropdown-item" href="#">链接 2</a></li>
            <li><a class="dropdown-item" href="#">链接 3</a></li>
          </ul>
        </div>
      </header>
      <nuxt />
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
      url("/images/banner3.jpg");
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
</style>