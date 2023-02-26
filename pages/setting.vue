<template>
    <div>
      <h1>Welcome to the homepage111</h1>
      <AppAlert>
        This is an auto-imported component
      </AppAlert>
    </div>
  </template>
  <script setup>
  definePageMeta({
    layout: "custom",
    middleware: ["auth"]
  })
  </script>