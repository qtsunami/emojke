<template>
  <div class="flex min-w-min min-h-screen px-80 py-5 justify-between">
    <div class="w-8/12">
      <div class="article w-[100%]">
        <div class="w-[100%] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex h-50">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
            </div>
            <div class="p-4">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
            </div>
            <div class="p-4">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
            </div>
            <div class="p-4">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
            </div>
            <div class="p-4">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[100%] overflow-hidden md:max-w-2xl mt-5">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
      
    </div>
    <div class="w-4/12 bg-red-200">
      Right List
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    components: {
    },
    data() {
      return {
        page: 3
      }
    },
  })
</script>