<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})

</script>

<template>
  <div>
    <SplashScreen v-if="showSplash" />
    <router-view v-else />
  </div>
</template>

<style>
/* Global styles if necessary */
</style>
