<template>
  <div class="md:flex min-w-min">
    <GuideBlock :guide="state.guide"></GuideBlock>
    <div class="right md:ml-20">
      11222211
      33334442112124444412124444412124444
      4121244444121244444121244444121244444

      121244444

    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

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
    }
  ]
})
definePageMeta({
  layout: "none"
})

</script>
