<template>
	<figure class="sub-item mb-8">
		<div class="mb-4">
			<h3><i :class="icon"></i> {{ title }}</h3> 
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
			<div class="flex h-16 bg-white p-3">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://aigc.cn/wp-content/uploads/2023/02/3288a-chat.openai.com.png" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

			<div class="flex h-16 bg-white p-3 shadow">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://www.aigc.cn/wp-content/uploads/2023/03/QQ%E6%88%AA%E5%9B%BE202303271932061.jpg" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

			<div class="flex h-16 bg-white p-3 shadow ">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://aigc.cn/wp-content/uploads/2023/02/3288a-chat.openai.com.png" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

			<div class="flex h-16 bg-white p-3 shadow">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://www.aigc.cn/wp-content/uploads/2023/03/QQ%E6%88%AA%E5%9B%BE202303271932061.jpg" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

			<div class="flex h-16 bg-white p-3 shadow">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://aigc.cn/wp-content/uploads/2023/02/3288a-chat.openai.com.png" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

			<div class="flex h-16 bg-white p-3 shadow">
				<div class="xl:w-5/12 m-auto">
					<img class="w-10 h-10 m-auto rounded-full" src="https://www.aigc.cn/wp-content/uploads/2023/03/QQ%E6%88%AA%E5%9B%BE202303271932061.jpg" />
				</div>
				<div class="px-2 w-3/4 xl:w-7/12 my-auto">
					<h5 class="mb-1">ChatGPT</h5>
					<p class="text-xs text-gray-400 truncate md:overflow-ellipsis md:overflow-hidden">ChatGPT 可以回答后续问题、承认错误、挑战不正确的前提并拒绝不适当的请求。</p>
				</div>
			</div>

		</div>
	</figure>
</template>

<script setup>
defineProps({
	title: String,
	icon: String,
	guideItem: Array,
})
</script>