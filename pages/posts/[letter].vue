<style>
.vcontent h1, h2, h3, h4, h5, h6, pre, p {
  margin: revert;
}
.vcontent code {
  font-family: revert;
}
</style>
<template>
  <div class="max-w-7xl mx-auto py-3.5 px-6 md:flex justify-between">
    <div class="w-full bg-white p-6 rounded-md mt-4 md:w-3/4 md:mr-7">
      <div class="text-center">
        <h1 class="py-2">Go日志库——logrus，如何设计一个日志包</h1>
        <ul class="flex text-sm text-gray-400 justify-center pb-3">
          <li class="px-2"><i class="bi bi-calendar3"></i> 2022-11-20 12:12:34</li>
          <li class="px-2"><i class="bi bi-person-fill"></i> 西梧RT</li>
          <li class="px-2"><i class="bi bi-eye-fill"></i> 200</li>
        </ul>
      </div>
      <div class="vcontent" v-html="$mdRenderer.render(res.data.contents)"></div>
      <div class="border-t my-4"></div>
      <div class="">
        <img src="https://img.spingdraft.com/mp.png" alt="" />
      </div>
    </div>
    <Sidebar />
  </div>
</template>



<script setup>

const { data: res } = await useFetch('http://localhost:8080/api/article/detail?id=10031')


definePageMeta({
  layout: "custom",
  components: {
  }
})

// export default {
//   data() {
//     return {
//       pageC: `<p data-v-295e23d8=""><p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">英国的院校对学生的论文写作要求是很高的，如果你想要让你的论文内容看起来足够丰满的话，参考文献，摘要，引用等等是一定要用到的。但是你的论文交上去又会有专门的系统进行检测，如果抄袭率过高的话，是不能过关的。所以，文献处理等等也就成了论文写作中比较难处理的问题。下面海外学术网老师给大家分享一些参考文献的处理方法。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;"><span style="box-sizing: inherit; font-weight: bolder;">一、毕业论文的考察目的。</span>在文章中纵多的文献参考资料中，学生需要做精华内容的提取工作，对文献资料利用需要得当，保证文章的质量，否则可能因为自己的引用会出现一些抄袭或质量低，严重的可能会被导师认为剽窃。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;"><span style="box-sizing: inherit; font-weight: bolder;">二、准备工作分步进行。</span>即：资料的记录、资料分析和整理。这样才能保证自己对文献资料的精华内容得到恰当的利用。接下来则是对毕业论文文献参考资料的两个比较重要的步骤—-资料的记录、资料的分析和整理进行总结。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">（1）资料的记录。当学生参考文献资料的同时，应养成信息记录的习惯。当然在你做记录的时候可以依个人需求的类型做具体的记录，因为资料的类型、性质、用途以及个人习惯的不同将会有不同的记录方式，采用记笔记和复印的方式在留学生中占比稍多。如果你也是以记笔记的方式来做资料记录时，可以推荐给你主要的几种方法。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">（2）写批注或做标记法。所谓批注，即在文献参考资料处写上自己的见解，或者评论，或者解释、质疑.而记号是读者在重点、难点、精彩之处或自己感兴趣之处画上自己可识别的一些标记符号，如直线、曲线、红线、圆圈、括号等等。要提醒一点，此方法仅限于在书籍上使用。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">（3）摘录法。即记下原文重要、精彩的内容，以便在今后撰写毕业论文时可直接作为论证、引证之用.但要注意的是，摘录时要注明参考资料的来源，如作者姓名、书名或论文题目、出版地、出版社、版本、出版时间等等。这样做是以便学生随时查询，又可为论文写作中的注释和参考文献做好准备。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">（4）提要法。所谓提要，系把原文的基本内容、主题思想、观点、独到之处或其他数据，用自己的话加以概括（引用原文也可以）概括一定要忠于原文作者的观点。总之，记笔记可以在笔记上记或自己特别准备的一些小卡片来完成，最终要使得日后使用资料的不会使资料失真走样，同时又可以节省时间和精力，以便我们在最后毕业论文撰写时方便提取且快捷。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;"><span style="box-sizing: inherit; font-weight: bolder;">三、对收集的</span><span style="box-sizing: inherit; font-weight: bolder;">资料</span><span style="box-sizing: inherit; font-weight: bolder;">进行筛选分析整理归纳。</span></p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">对于以上收集过来的所有参考资料，学生们需要在实际的写作过程中对它进一步学习并分析和整理。它是一个由粗到细、由多到少的过程。即从你收集到的大量文献资料中摄取和你毕业论文最有用的信息资料，所以必须对所获资料再做一番去粗取精、去伪存真、由表及里、分类编排的分析和整理的工作。对整理后准备利用的文献资料，需要最后对其可靠性进行鉴别和评价，对那些不完全可靠的则要剔除。</p>
// <p style="box-sizing: inherit; margin: 0px 0px 10px; line-height: 1.8; overflow-wrap: break-word; color: #34495e; font-family: Lato, sans-serif; font-size: 15px; background-color: #ffffff;">毕业论文对同学们来说有多重要，想必不用我说大家也知道吧。毕业论文的篇幅很长，难度系数也很大，所以，大家想要写好自己的论文，给留学生涯划上一个圆满的句号的话，需要花很多心思和精力哦！</p></p>`
//     }
//   },
// }

</script>