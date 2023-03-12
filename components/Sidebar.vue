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
            Simple qtsunima
          </div>
          <div class="text-gray-500">
            Free Engineer, Beijing
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
        <li class="h-10 leading-10 border-b-2 pl-4">
          <a href="#">Go语言</a>
        </li>
        <li class="h-10 leading-10 border-b-2 pl-4">Python</li>
        <li class="h-10 leading-10 border-b-2 pl-4">前端</li>
        <li class="h-10 leading-10 pl-4">职场</li>
      </ul>
    </figure>

    <figure class="bg-gray-100 rounded-md px-4 py-4 mt-5 sidebar-widget">
      <h2 class="text-xl font-bold font-sans relative pb-2">标签<span class="text-base pl-2 text-blue-600">By Tags</span></h2>
      <ul class="text-sm inline-block mt-2">
        <li class="h-10 leading-10 px-2 mt-2 mr-2 border float-left" v-for="tag in tags" :key="tag.id">
          <a href="#">{{ tag.name }}</a>
        </li>
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

</script>