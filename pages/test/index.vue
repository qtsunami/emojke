<template>
	{{ page }}
	<div class="w-full flex justify-between mx-auto p-5">
		<el-button plain :disabled="pending" :icon="ArrowLeft" @click="page--">上一页</el-button>
		<el-button plain :disabled="pending" disabled="disabled" @click="page++">
		下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
		</el-button>
	</div>

</template>

<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'

const route = useRoute()

const page = ref(1)
const { data, pending, refresh } = await useAsyncData(() => $fetch(`http://81.70.5.36:8080/api/article?page=${page.value}`), { watch: [page]})

definePageMeta({
  layout: "custom",
  components: {
    ArrowLeft,
    ArrowRight
  },
  methods: {
  },
})

</script>

<!-- <script setup>
const ctr = ref(0)
const { data, pending, refresh } = await useAsyncData(() => $fetch(`/api/hello/${ctr.value}`), { watch: [ctr] })

</script> -->