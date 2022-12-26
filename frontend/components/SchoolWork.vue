<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{SchoolWork.title}}</span>
			<span>{{SchoolWork.date}}</span>
		</div>
		<div class="action-buttons">
			<nuxt-link :to="`/waterplants/${waterplant.id}/`" class="btn btn-sm btn-success">
				詳細
			</nuxt-link>
			<nuxt-link :to="`/waterplants/${waterplant.id}/edit/`" class="btn btn-sm btn-primary">
				編集
			</nuxt-link>
			<button @click="onDelete(waterplant.id)" class="btn btn-sm btn-danger">
				削除
			</button>
    </div>
  </el-card>
</template>
<script>
export default {
  props: ['SchoolWork', 'onDelete']
}
</script>
<style>
.water-plant-card {
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6);
}
</style>