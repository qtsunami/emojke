<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center">
      <span class="text-green-500 text-xl mr-1">
        <i class="bi bi-tree-fill z-50"></i>
      </span>

      <h1 class="text-xl">西梧 runtime</h1>
    </div>

    <span @click="OpenMenu()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
    :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6" v-for="link in links" :key="link.name">
        <a :href="link.link" class="text-lg hover:text-green-500">{{ link.name }}</a>
      </li>

      <!-- <Button>Get Started</Button> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { name: "首页", link: "/" },
        { name: "归档", link: "/archive" },
        { name: "关于我", link: "/about" },
      ],
      open: false
    }
  },
  methods: {
    OpenMenu () {
      this.open = !this.open
    }
  }
}
</script>

