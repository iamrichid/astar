<template>
  <div id="app">
    <SplashScreen v-if="showSplash" />
    <router-view v-else />
  </div>
</template>

<script setup>
import { defineComponent ,ref, onMounted} from 'vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 3000)
})

</script>

<style>
/* Global styles if necessary */
</style>
