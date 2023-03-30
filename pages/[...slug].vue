<template>
  <main>
    <section
    class="prose prose-gray text-sm"
    v-html="$mdRenderer.render(res.data.contents)"
  />
  </main>

</template>
<script setup>
// const markdownString = "# Markdwon-it in Nuxt3"
definePageMeta({
  layout: "custom"
})

const markdownString = `# Markdwon-it in Nuxt3`

const { data: res } = await useFetch('http://localhost:8080/api/article/detail?id=10031')


// export default {
//   data () {
//     return {
//       markdownString: `# Markdwon-it in Nuxt3`
//     }
//   }
// }

</script>