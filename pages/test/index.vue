<template>
	{{ previousTodos }}

</template>
<script setup>
	const count = 1
	const prev = ref(1)
	const next = ref(2)
	const previousTodos = ref([])
	const { data: res} = await useFetch(`https://api.test.kaoersiedu.com/api/subject?subject_code=ielts`, {
		onRequest () {
			previousTodos.value = "bbb"
		},
		async onResponse(resp) { 
			const b = await resp
			previousTodos = b
		}
	})

	// const { data } = await useAsyncData("data", () => $fetch(`https://api.test.kaoersiedu.com/api/subject?subject_code=ielts`))

</script>