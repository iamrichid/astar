<template>
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-specialGothic font-bold text-astar-navy mb-6">Your Past Quotes</h1>
  
      <!-- Quote List -->
      <div v-if="quotes.length" class="space-y-6">
        <div
          v-for="(quote, index) in quotes"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
        >
          <p class="text-sm text-gray-400 mb-2">📅 <strong>Submitted:</strong> {{ quote.submittedAt }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-astar-navy">
            <p><strong>Product:</strong> {{ quote.product.name }}</p>
            <p><strong>Quantity:</strong> {{ quote.quantity }}</p>
            <p><strong>Status: <i>processing </i></strong></p>
          </div>
        </div>
      </div>
  
      <!-- No Quotes Fallback -->
      <p v-else class="text-center text-gray-500 mt-12">No quotes found. Submit one and it’ll appear here!</p>
  
      <!-- Action Buttons -->
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <router-link
          to="/"
          class="flex items-center gap-2 text-astar-navy hover:text-astar-gold transition underline text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </router-link>
  
        <router-link
          to="/products"
          class="inline-block bg-astar-navy text-white px-6 py-3 rounded-xl shadow hover:bg-astar-gold transition-colors"
        >
          Browse Products
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const quotes = ref([])
  
  onMounted(() => {
    const saved = localStorage.getItem('quotes')
    if (saved) {
      quotes.value = JSON.parse(saved)
      console.log('Loaded quotes:', quotes.value)
    }
  })
  </script>
  