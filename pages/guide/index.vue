<template>
  <div class="md:flex min-w-min max-h-screen">
    <GuideBlock :guide="state.guide"></GuideBlock>
    <div class="right w-full border-2 h-screen bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div class="bg-white fixed w-full h-10 leading-10 hidden">
        占位
      </div>
      <div class="px-5 pt-16 md:pt-5">
        <GuideList v-for="item in state.guideData" title="GuideList" icon="bi bi-columns-gap"></GuideList>
      </div>
      <NewFooter></NewFooter>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
  guide: [
    {
      name: "导航 Start",
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
      name: "导航 End",
      code: "code1",
      icon: "bi bi-heart-pulse"
    }
  ],
  guideData: [
    [],[],[],[],[],[],[],[],[],[],
  ],
})
definePageMeta({
  layout: "none"
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
