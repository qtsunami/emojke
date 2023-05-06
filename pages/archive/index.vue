<template>
	<div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
		<div class="w-full bg-white p-6 rounded-md mt-4 md:w-3/4 md:mr-7">
			<div class="border-b mb-8 h-14">
				<span class="font-san text-xl font-bold"><i>青春大有可为，梦想向阳而生</i></span>
			</div>
			<div class="md:mx-8">
				<div class="mb-8" v-for="item in res.data">
					<h2 class="text-center md:text-left bg-blue-600 text-white rounded-sm md:pl-5"> {{ item.year }} 年</h2>
					<ul class="mt-4 md:ml-4">
						<li class="font-mono" v-for="article in item.list">
							<div class="flex leading-8">
								<div class="w-32 hidden md:block">
									<span>{{ article.year + "-" + article.date }}</span>
								</div>
								<div class="ml-5">
									<a :href="`/posts/${article.id}.html`" class="text-base text-gray-400 hover:text-red-600">{{ article.title }}</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			
			<!-- <div class="">
				<img src="https://img.spingdraft.com/mp.png" alt="" />
			</div> -->
		</div>
		<Sidebar />
	</div>
</template>
<script setup>


const { data: res } = await useFetch(`https://api.spingdraft.com/api/article/archive`)
// const { data: res } = await useFetch(`http://localhost:8080/api/article/archive`)

if (!res.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

definePageMeta({
  layout: "custom",
  components: {
  }
})

useHead({
  titleTemplate: "西梧Runtime",
  meta: [
    { name:"keywords", content: "文章归档" },
    { name: "description", content: "文章归档" }
  ]
})

</script>