<template>
  <div class="w-full md:w-3/4 md:mr-7 border">
    <div class="article mt-4 bg-gray-50 py-2 rounded pb-4 hover:border hover:border-yellow-800" v-for="article in data.data.list" :key="article.id">
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
        <el-button plain :icon="ArrowLeft" :disabled="page <= 1" @click="page > 1 ? page-- : 1">上一页</el-button>
        <el-button plain :disabled="page >= data.data.total_page" @click="page ++">
          下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

const props = defineProps({
  dType: String,
  dValue: String,
});

const dType = props.dType == undefined ? "" : props.dType
const dValue = props.dValue == undefined ? "" : props.dValue

  console.log(dType, dValue);

  const page = ref(1)
  const { data, pending, refresh } = await useAsyncData(() => $fetch(`https://api.spingdraft.com/api/article?page=${page.value}&category=${dType}&code=${dValue}`), { watch: [page]})
</script>
