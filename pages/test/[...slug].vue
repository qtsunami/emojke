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
  <div class="w-3/4 m-auto bg-gray-50 p-10">
    <h1 class="text-center">{{ res.data.title }}</h1>

    <div class="vcontent vHighlight" v-html="$mdRenderer.render(res.data.contents)"></div>
  </div>

</template>
<script setup>
// 引入highlightjs代碼高亮插件
import 'highlight.js/styles/monokai.css'
import hljs from "highlight.js"

definePageMeta({
  layout: "custom"
})

const { data: res } = await useFetch('http://81.70.5.36:8080/api/article/detail?id=10023')

setTimeout(() =>{
      hljs.highlightAll()
},200)
</script>