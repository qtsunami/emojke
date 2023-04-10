<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <ArticleList :dType="dType" :dValue="dValue"></ArticleList>
    <Sidebar></Sidebar>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
})

const route = useRoute()
const dType = ref("category")
const dValue = route.params.id
</script>
