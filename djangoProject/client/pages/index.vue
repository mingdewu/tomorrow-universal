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
    <div class="text-box">
      <h1>ユニバーサルの明日</h1>
      <p class="mt-3">
      ユニバーサルの明日を調査しよう！
      </p>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        文法チェック
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        表情対応ロボット
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        音声比較
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        古漢語翻訳モデル
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        tableAU教室(日韓語)
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
       話せる人間(日韓語)
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        Life Line
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
       楽典(日韓語)
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        今日のユニバーサル
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
      <nuxt-link class="btn btn-outline btn-large btn-info" to="/waterplants">
        明日のユニバーサル
       <!-- <span class="ml-2">→</span>-->
      </nuxt-link>
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
