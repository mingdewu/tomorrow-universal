<template>
  <layout-wrapper>
    <layout-header></layout-header>
    <layout-visual
    title="tomorrow-universal"
    message="flatter world"></layout-visual>
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>項目</base-heading>
      <div class="flex flex-wrap justify-between mb-20 md:mb-0">
        <div class="md:w-56 mb-20 shadow-lg bg-gray-200" >
          <div class="max-w" >
            <!-- <img src="~/assets/img/tomorrow-home.jpg" alt="商品名" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
              <p class="text-gray-700 text-base mb-4">480</p>
            </div> -->
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
      <base-button name="メニューの一覧" link="/japanese_major" />
      <base-heading>お知らせ</base-heading>
      <div class="mb-20">
        <div
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5">
          <a href="mingde_university" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
            2023.3.10
            </time>
            <div class="md:w-10/12">私の大学</div>
          </a>
        </div>
      </div>
      <base-button name="お知らせの一覧" link="/mingde_university" />
    </div>
  </layout-wrapper>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import BaseHeading from '../components/BaseHeading.vue'
import LayoutHeader from '../components/LayoutHeader.vue'
import LayoutWrapper from '../components/LayoutWrapper.vue'
export default {
  components: { LayoutWrapper, BaseHeading, LayoutHeader },
  name: 'IndexPage'
}
</script>

<style>
.visual-home {
  background-image: url("~@/assets/img/tomorrow-home2.jpg");
}
</style>
