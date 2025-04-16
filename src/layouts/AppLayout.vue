<!-- src/layouts/AppLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-200">
    <AppHeader />
    <main class="flex-1 container mx-auto p-4">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
