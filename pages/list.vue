<template>
  <div>
    Where am i, you guess? {{ page }}
  </div>
</template>
<script setup>
const page = ref(11)

// export default {
//   data() {
//     return {
//       page: 1
//     }
//   }
// }

definePageMeta({
  layout: "custom"
})
</script>