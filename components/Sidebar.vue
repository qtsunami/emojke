<template>
  <div class="w-1/4 hidden py-3.5 md:block">
    <figure class="bg-gray-100 rounded-md p-8">
      <img class="w-32 h-32 rounded-full mx-auto" src="https://youthman.oss-cn-beijing.aliyuncs.com/2021/06/23/16244514644386.jpeg" alt="" />
      <div class="pt-6 text-center space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “志不立，天下无可成之事，虽百工技艺，未有不本于志者”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-blue-600">
            qtsunima
          </div>
          <div class="text-gray-500">
            A very, very lazy man.
          </div>
        </figcaption>
      </div>
      <div class="flex justify-center items-center py-3.5">
        <div class="w-8 h-8 leading-8 text-center border"><i class="bi bi-github"></i></div>
        <div class="w-8 h-8 leading-8 text-center border"><i class="bi bi-google"></i></div>
        <div class="w-8 h-8 leading-8 text-center border"><i class="bi bi-medium"></i></div>
        <div class="w-8 h-8 leading-8 text-center border"><i class="bi bi-wechat"></i></div>
      </div>
    </figure>

    <figure class="bg-gray-100 rounded-md px-4 py-4 mt-5 sidebar-widget">
      <h2 class="text-xl font-bold font-sans relative pb-2">分类<span class="text-base pl-2 text-blue-600">By Categories</span></h2>
      <ul class="text-sm">
        <li class="h-10 leading-10 pl-4" v-for="(c, i) in category" :key="i" :class="i < category.length-1 ? 'border-b-2' : ''">
          <NuxtLink :to="`/category/${c.code}`" class="hover:text-blue-600">{{ c.category_name }}</NuxtLink>
        </li>
      </ul>
    </figure>

    <!-- <figure class="bg-gray-100 rounded-md px-4 py-4 mt-5 sidebar-widget">
      <h2 class="text-xl font-bold font-sans relative pb-2">标签<span class="text-base pl-2 text-blue-600">By Tags</span></h2>
      <ul class="text-sm inline-block mt-2">
        <li class="h-10 leading-10 px-2 mt-2 mr-2 border float-left" v-for="tag in tags" :key="tag.id">
          <a href="#">{{ tag.name }}</a>
        </li>
      </ul>
    </figure> -->

    <figure class="bg-gray-100 rounded-md px-4 py-4 mt-5 sidebar-widget">
      <h2 class="text-xl font-bold font-sans relative pb-2">最近文章<span class="text-base pl-2 text-blue-600">Related Posts</span></h2>
      <ul class="text-sm">
        <li class="pl-4 pt-2">
          <a href="#">Go是一门面向对象编程语言吗</a>
        </li>
        <li class="pl-4 pt-2">小厂内部私有Go module拉取方案3</li>
        <li class="pl-4 pt-2">一文告诉你如何判断Go接口变量是否相等</li>
        <li class="pl-4 pt-2">职场</li>
      </ul>
    </figure>

  </div>
</template>
<style scoped>
.sidebar-widget>h2:before {
  background: #3ac6b6 none repeat scroll 0 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  top: 100%;
  width: 80px;
}
</style>
<script lang="ts" setup>
const tags = ref([
  {id: 1, name: "Go语言"},
  {id: 2, name: "Python"},
  {id: 3, name: "Linux"},
  {id: 4, name: "前端"},
  {id: 5, name: "Vue"},
  {id: 6, name: "PHP"},
  {id: 7, name: "Gin"},
  {id: 8, name: "Gorm"},
  {id: 9, name: "logrus"},
]);

const category = ref([])


const getCategory = async () => {
  const {data: res, error: resError} = await useAsyncData(() => $fetch(`https://api.spingdraft.com/api/category`), {
    transform: (result) => {
      var dt = result.data.list;
      return dt
    }
  })
  category.value = res.value
}

// const { data, pending, refresh } = await useAsyncData(() => $fetch(`http://127.0.0.1:8080/api/category`), {
//   transform: (result) => {
//     console.log(111)
//     var dt = result.data.list;
//     console.log(dt)
//     return dt
//   }
// })

await getCategory()
</script>