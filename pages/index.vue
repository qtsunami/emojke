<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <div class="w-full md:w-3/4 md:mr-7 border">


      <div class="article mt-4 bg-gray-50 py-2 rounded pb-4 hover:border hover:border-yellow-800" v-for="article in res.data.list" :key="article.id">
        <div class="w-full px-5 md:h-40 md:overflow-hidden">
          <h1 class="py-1 px-2">
            <a :href="'/posts/' + article.id" class="text-xl font-bold hover:text-blue-500">{{ article.title }}</a>
            <!-- <nuxt-link :to=>{{ article.title }}</nuxt-link> -->
          </h1>
          <div class="py-2">
            <ul class="flex text-xs text-gray-400">
              <li class="px-2"><i class="bi bi-calendar3"></i> {{ article.create_date }}</li>
              <li class="px-2"><i class="bi bi-person-fill"></i> {{ article.author }}</li>
              <!-- <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li> -->
            </ul>
          </div>
          <div class="px-2">
            {{ article.introduce }}
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between mx-auto p-5">
          <div>
            <NuxtLink class="border-gray-50">上一页</NuxtLink>
          </div>
          <el-button plain :icon="ArrowLeft" @click="redirect(res.data.prev_page)">上一页</el-button>
          <el-button plain @click="redirect(res.data.next_page)">
            下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'

const route = useRoute()

const page = route.query.page > 0 ? route.query.page : 1;

const { data: res } = await useFetch(`http://81.70.5.36:8080/api/article?page=${route.query.page}`)
// const { data: res } = await useFetch(`http://localhost:8080/api/article?page=${route.query.page}`)


definePageMeta({
  layout: "custom",
  components: {
    ArrowLeft,
    ArrowRight
  },
  methods: {
    redirect(page) {
      location.href = "/?page=" + page
    }
  },
})

</script>