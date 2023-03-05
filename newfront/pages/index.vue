<template>
<div>
  <header class="w-full absolute md:static bg-black px-2 py-2 z-50">
  </header>
  <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center z-10"
      style="min-height: 75px;"
    >
    <div class="absolute top-0 w-full h-full bg-center bg-cover visual-home">
      <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75"
      ></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <h1 class="text-black font-semibold text-5xl text-shadow">
              TOMORROW UNIVERSAL®
            </h1>
            <p class="mt-4 text-lg text-white text-shadow-md">
                お知らせ
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px; transform: translateZ(5px);"
    >
    <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
        <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
    </div>
  </div>
  <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
    <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
       おすすめ
    </h2>
    <div class="flex flex-wrap justify-between mb-20 md:mb-0">
      <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
        <div class="max-w">
          <img src="~/assets/img/tomorrow-home.jpg" alt="商品名" class="w-full" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">ニュース</div>
            <p class="text-gray-700 text-base mb-4">480円（税込）</p>
          </div>
        </div>
      </div>
      <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
        <div class="max-w">
          <img src="~/assets/img/tomorrow-home.jpg" alt="商品名" class="w-full" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">ニュース</div>
            <p class="text-gray-700 text-base mb-4">480円（税込）</p>
          </div>
        </div>
      </div>
      <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
        <div class="max-w">
          <img src="~/assets/img/tomorrow-home.jpg" alt="商品名" class="w-full" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">ニュース</div>
            <p class="text-gray-700 text-base mb-4">480円（税込）</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-10 mx-auto text-center">
      <a
      href="/japanese_major/"
          class="font-semibold md:text-lg xl:text-base px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 leading-tight shadow-md rounded-lg bg-white hover:bg-gray-200 text-gray-800"
      >
        メニュー
      </a>
    </div>
    <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
      お知らせ
    </h2>
  </div>
  <footer class="bg-black pb-10 pt-10">
      <p
        class="text-center text-white text-sm font-bold leading-relaxed whitespace-no-wrap uppercase"
      >
        TOMORROW UNIVERSAL Copyright ©  2023
      </p>
    </footer>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.visual-home {
  background-image: url("~@/assets/img/tomorrow-home2.jpg");
}
</style>
