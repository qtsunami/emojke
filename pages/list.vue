<template>
  <div class=" text-gray-100 max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between items-center">
    <div class="w-full md:w-3/4 bg-blue-500 md:mr-7 border">
      <div>
        <div class="w-full md:h-80">
          <img class="w-full h-full" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
        </div>
        <div>
          <h2>这里是标题</h2>
        </div>
      </div>
    </div>
    <div class="w-1/4 bg-yellow-700 hidden md:block">
      right
    </div>
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