<template>
    <div class="max-w-4xl mx-auto py-16 px-6 text-center">
      <!-- Title Section -->
      <h1 class="text-4xl font-semibold font-specialGothic mb-6">Thank you for your quote!</h1>
      <p class="text-lg text-gray-600 mb-8">We've received your request and will follow up shortly.</p>
  
      <!-- Quote Summary Section -->
      <div v-if="quote" class="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold text-astar-navy mb-4">Quote Summary:</h2>
        <div class="space-y-3 text-left">
          <p><strong class="text-astar-navy">Product:</strong> {{ quote.product.name }}  GHS {{ quote.product.price }} </p>
          <p><strong class="text-astar-navy">Quantity:</strong> {{ quote.quantity }}</p>
        
        </div>
      </div>
  
      <!-- Action Links -->
      <div class="space-y-6">
  <!-- View Past Quotes Link -->
  <router-link to="/quotes" class="text-lg  underline  transition-colors duration-200">
    View Past Quotes
  </router-link>

  <!-- Place Another Quote Button -->
  <router-link to="/" class="inline-block px-6 py-3 rounded-xl transition-colors duration-200">
    Place Another Quote
  </router-link>
</div>

    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  
  
  const quote = ref(null)
  
  onMounted(() => {
    const saved = localStorage.getItem('last_quote')
    if (saved) {
      quote.value = JSON.parse(saved)
    }
  })
  </script>
  