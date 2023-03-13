<template>
  <main>
    <div v-html="pageC">
    </div>

    BBB
  </main>
</template>
<script>
definePageMeta({
  layout: false
})

export default{
  data() {
    return {
      pageC: "<h2>Page C</h2>"
    }
  }
}

</script>