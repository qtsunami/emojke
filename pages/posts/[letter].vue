<style>
.vcontent h1, h2, h3, h4, h5, h6, pre, p {
  margin: revert;
}
.vcontent code {
  font-family: revert;
}

.vcontent ul, .vcontent ol {
  list-style: initial;
  margin: revert;
  padding: revert;
}
</style>
<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <div class="w-full bg-white p-6 rounded-md mt-4 md:w-3/4 md:mr-7">
      <div class="text-center border-b">
        <h1 class="py-2">{{ res.data.title }}</h1>
        <ul class="flex text-sm text-gray-400 justify-center pb-3">
          <li class="px-2"><i class="bi bi-calendar3"></i> {{ res.data.release_date }}</li>
          <li class="px-2"><i class="bi bi-person-fill"></i> {{ res.data.author }}</li>
          <!-- <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li> -->
        </ul>
      </div>
      <div class="vcontent" v-html="$mdRenderer.render(res.data.contents)"></div>
      <div class="border-t my-4"></div>
      <div class="">
        <img src="https://img.spingdraft.com/mp.png" alt="" />
      </div>
    </div>
    <Sidebar />
  </div>
</template>



<script setup>
// 引入highlightjs代碼高亮插件
import 'highlight.js/styles/monokai.css'
import hljs from "highlight.js"

const route = useRoute()

const letter = route.params.letter.replace(".html", "")

const { data: res } = await useFetch(`https://api.spingdraft.com/api/article/detail?id=${letter}`)

if (!res.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const title = ref(res.value.data.title)
const description = ref(res.value.data.introduce)

setTimeout(() =>{
      hljs.highlightAll()
},200)

definePageMeta({
  layout: "custom",
  components: {
  },
  validate: async (route) => {
    const nuxtApp = useNuxtApp()
    // Check if the id is made up of digits
    return /^\d+\.html$/.test(route.params.letter)
  }
})

useHead({
  titleTemplate: "%s - 西梧Runtime",
  meta: [
    { name:"keywords", content: title },
    { name: "description", content: description }
  ]
})

</script>