<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center">
      <span class="text-green-500 text-xl mr-1">
        <i class="bi bi-messenger z-50"></i>
      </span>

      <h1 class="text-xl">Designer</h1>
    </div>

    <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="link in links" :key="link.name">
        <a href="#" class="text-xl hover:text-green-500">{{ link.name }}</a>
      </li>
      <li class="md:mx-4">
        <a href="#" class="text-xl hover:text-green-500">{{ tt }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>

definePageMeta({
  data() {
    return {
      tt: "Home",
      links: [
        { name: "Home", link: "#" },
        { name: "Archives", link: "#" },
        { name: "Blog's", link: "#" },
        { name: "About", link: "#" },
      ]
    }
  }
})
</script>
