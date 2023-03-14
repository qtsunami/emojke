<template>
  <main>
    <section
    class="prose prose-gray text-sm"
    v-html="$mdRenderer.render(markdownString)"
  />
  </main>
</template>
<script>
// const markdownString = "# Markdwon-it in Nuxt3"
definePageMeta({
  layout: "custom"
})

export default {
  data () {
    return {
      markdownString: `# Markdwon-it in Nuxt3`
    }
  }
}

</script>