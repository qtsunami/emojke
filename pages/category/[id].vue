<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <ArticleList d-type="category" d-value="golang"></ArticleList>
    <Sidebar></Sidebar>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
})
</script>
