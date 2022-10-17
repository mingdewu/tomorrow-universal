<template>
  <div  style="margin:auto;width:70%">
    <h2>「楽典」準備中</h2>
    <div id="app-7">
      <ol>
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>
  </div>
</template>
<script>

</script>