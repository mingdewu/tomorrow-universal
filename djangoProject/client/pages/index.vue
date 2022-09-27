<script>
export default {
  name: 'IndexPage'
}
</script>
<template>
  <header>
      <nuxt-link class="" to="/japanese_grammer_checker">
      文法チェック
      </nuxt-link>
      <nuxt-link class="" to="/emotion_classification">
      表情対応ロボット
      </nuxt-link>
      <nuxt-link class="" to="/listenning_shadowing">
      音声シャドーイング
      </nuxt-link>
      <nuxt-link class="" to="/japanese_classicalchinese_model">
      古漢語-日本語モデル
      </nuxt-link>
      <nuxt-link class="" to="/tableau">
      tableAU教室(日韓語)
      </nuxt-link>
      <nuxt-link class="" to="/first_language">
      人間の第一言語(日韓語)
      </nuxt-link>
      <nuxt-link class="" to="/life_line">
      Life Line
      </nuxt-link>
      <nuxt-link class="" to="/classical_music_theory">
      楽典(日韓語)
      </nuxt-link>
      <nuxt-link class="" to="/world_data">
      世界データ収集/予測
      </nuxt-link>
      <nuxt-link class="" to="waterplants">
        水物
      </nuxt-link>
  </header>
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
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.2)
    ),
    url("/images/b.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  margin: auto;
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
.div {
  font-size:30px;
}
</style>
