<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <div class="w-full md:w-3/4 md:mr-7 border">
      <div class="article mt-4 bg-gray-50 py-2 rounded pb-4">
        <div class="w-full md:h-60">
          <img class="w-full h-full" src="https://krs-oversea.oss-cn-beijing.aliyuncs.com/2023/02/a916e05fe46ea2078b54dcf46e70f0c7.jpg" alt="Man looking at item at a store">
        </div>
        <div class="w-full px-5 md:h-40 md:overflow-hidden">
          <div class="py-1 px-2">
            <a href="#" class="text-xl font-bold hover:text-blue-500">不同方面浅浅认识一下 Synchronized</a>
          </div>
          <div class="py-2">
            <ul class="flex text-xs text-gray-400">
              <li class="px-2"><i class="bi bi-calendar3"></i> 2022-11-20 12:12:34</li>
              <li class="px-2"><i class="bi bi-person-fill"></i> 西梧RT</li>
              <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li>
            </ul>
          </div>
          <div class="px-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>

      <div class="article mt-4 bg-gray-50 py-2 rounded pb-4">
        <div class="w-full px-5 md:h-40 md:overflow-hidden">
          <div class="py-1 px-2">
            <a href="#" class="text-xl font-bold hover:text-blue-500">不同方面浅浅认识一下浅认识一下 Synchronized</a>
          </div>
          <div class="py-2">
            <ul class="flex text-xs text-gray-400">
              <li class="px-2"><i class="bi bi-calendar3"></i> 2022-11-20 12:12:34</li>
              <li class="px-2"><i class="bi bi-person-fill"></i> 西梧RT</li>
              <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li>
            </ul>
          </div>
          <div class="px-2">
            Sed ut perspiciatis unde totam rem aperiam.Lormet, consectetur adipiscing elit.
          </div>
        </div>
      </div>

      <div class="article mt-4 bg-gray-50 py-2 rounded pb-4">
        <div class="w-full px-5 md:h-40 md:overflow-hidden">
          <div class="py-1 px-2">
            <a href="#" class="text-xl font-bold hover:text-blue-500">不同方面浅浅认识一下 Synchronized</a>
          </div>
          <div class="py-2">
            <ul class="flex text-xs text-gray-400">
              <li class="px-2"><i class="bi bi-calendar3"></i> 2022-11-20 12:12:34</li>
              <li class="px-2"><i class="bi bi-person-fill"></i> 西梧RT</li>
              <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li>
            </ul>
          </div>
          <div class="px-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolorem que laudantium totam rem aperiam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mx-auto p-5">
          <el-button plain :icon="ArrowLeft">上一页</el-button>
          <el-button plain>
            下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
      </div>
    </div>
    <div class="w-1/4 hidden py-3.5 md:block">
      <figure class="bg-gray-100 rounded-xl p-8">
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
          <div class="w-8 h-8 leading-8 text-center border">G</div>
          <div class="w-8 h-8 leading-8 text-center border">Q</div>
          <div class="w-8 h-8 leading-8 text-center border">W</div>
        </div>
      </figure>
      
    </div>
  </div>
</template>
<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
const page = ref(11)

definePageMeta({
  layout: "custom",
  components: {
    ArrowLeft,
    ArrowRight
  }
})
</script>