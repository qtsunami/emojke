<template>
  <div class="md:flex min-w-min">
    <GuideBlock :guide="state.guide"></GuideBlock>
    <div class="right w-full md:ml border-2 p-5 h-screen bg-gray-100">
      <figure class="sub-item mb-8">
        <div class="mb-4">
          <h3><i class="bi bi-columns-gap"></i> Go Web 框架</h3> 
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

      <figure class="sub-item mb-8">
        <div class="mb-4">
          <h3><i class="bi bi-columns-gap"></i> Go Web 框架</h3> 
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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

      <figure class="sub-item mb-8">
        <div class="mb-4">
          <h3><i class="bi bi-columns-gap"></i> Go Web 框架</h3> 
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
      

    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
  guide: [
    {
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-display"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-h-circle"
    },{
      name: "导航一",
      code: "code1",
      icon: "bi bi-heart-pulse"
    }
  ]
})
definePageMeta({
  layout: "none"
})

</script>
