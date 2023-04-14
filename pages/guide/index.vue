<template>
  <div class="w-full flex">
    <div class="left h-screen w-48 pt-5 bg-gray-300 overflow-y-auto">
      <div class="h-10 w-36 mx-auto bg-gray-700"></div>
      <ul class="justify-center items-center text-center mt-2">
        <li class="py-4" v-for="(item, key) in state.guide" :key="key"><i :class="item.icon"></i> {{ item.name }}</li>
      </ul>
    </div>
    <div class="right">
      <h2>HHHHH</h2>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

definePageMeta({
  layout: "none"
})

const state = reactive({
  guide: [
    {
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    }
  ]
})


</script>
<style scoped>
  /* 定义滚动条样式 */
  ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, .5);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
  background-color: rgba(13, 16, 97, 0.5);
}
</style>
