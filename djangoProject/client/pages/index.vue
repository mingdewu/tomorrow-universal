<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<template>
  <header>
    <div>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/japanese_grammer_checker">
        文法チェック
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/emotion_classification">
        表情対応ロボット
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/listenning_shadowing">
        音声シャドーイング
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/japanese_classicalchinese_model">
        古漢語-日本語モデル
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/tableau">
        tableAU教室(日韓語)
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/first_language">
        人間の第一言語(日韓語)
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/life_line">
        Life Line
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/classical_music_theory">
        楽典(日韓語)
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/world_data">
        世界データ収集
        </nuxt-link>
        <nuxt-link class="btn btn-outline btn-large btn-info" to="/tomorrow_predict">
          世界の明日
        </nuxt-link>
      </div>
    <div class="text-box">
      <h1>世界の明日</h1>
    </div>
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
    url("/images/banner.jpg");
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
</style>
