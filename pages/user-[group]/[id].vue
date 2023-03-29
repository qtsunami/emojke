<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
  <p>{{ res }}</p>
</template>

<script setup>
  const route = useRoute()
  console.log(route.params.group, route.params.id)

  // const { data: api } = await useFetch('/api/hello')
  // console.log(api)
  const { data: res } = await useFetch('http://localhost:8080/api/article')
</script>
