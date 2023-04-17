<template>
  <div class="left w-full min-w-min md:w-48 py-2.5 bg-gray-200 z-50">
    <span @click="openMenu()" class="absolute md:hidden left-1 top-2.5 cursor-pointer text-4xl z-50">
      <i :class="open ? '' : 'bi bi-filter-left'"></i>
    </span>

    <div class="h-10 w-48 m-auto bg-gray-700 z-50"></div>

    <div class="md:static absolute duration-700 top-0 ease-i z-50" :class="[open ? 'left-0' : 'left-[-100%]']">
      <div class="h-20 w-48 m-auto bg-blue-200"></div>

      <ul class="justify-center items-center w-48 text-left pl-8 bg-gray-600">
        <li class="py-4" v-for="(item, key) in guide" :key="key"><i :class="item.icon"></i> {{ item.name }}</li>
      </ul>
    </div>
    
  </div>
  <div @click="openMenu()" class="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-50 opacity-75" :class="[open ? '' : 'hidden']"></div>
</template>
<script setup>
defineProps({
  guide: Object,
})

const open = ref(0)

const openMenu = () => {
  open.value = !open.value
}

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
