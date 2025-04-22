<!-- src/layouts/AppLayout.vue -->
<template>
    <div class="flex flex-col m-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
      <AstraHeader />
      <main class="h-full flex flex-col gap-4 mt-5">
        <router-view />
      </main>
       <!-- <AstraFooter /> -->
    </div>
  </template>
  
  <script setup>
  import AstraHeader from '../components/AstraHeader.vue'
  import AstraFooter from '../components/AstraFooter.vue'
  </script>
  