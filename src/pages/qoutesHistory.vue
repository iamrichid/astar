<template>
    <div class="max-w-3xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">Past Quotes</h1>
  
      <div v-if="quotes.length">
        <div v-for="(quote, index) in quotes" :key="index" class="bg-white p-4 shadow mb-4 rounded">
          <p><strong>Date:</strong> {{ quote.submittedAt }}</p>
          <p><strong>Product:</strong> {{ quote.product }}</p>
          <p><strong>Quantity:</strong> {{ quote.quantity }}</p>
          <p><strong>Name:</strong> {{ quote.name }}</p>
          <p><strong>Email:</strong> {{ quote.email }}</p>
        </div>
      </div>
      <p v-else class="text-gray-500">No quotes found.</p>
  
      <router-link to="/" class="mt-6 inline-block text-blue-600 underline">← Back to Home</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const quotes = ref([])
  
  onMounted(() => {
    const saved = localStorage.getItem('quotes') // 🔥 key should match where you're saving all quotes
    if (saved) {
      quotes.value = JSON.parse(saved)
      console.log('Loaded quotes:', quotes.value)
    }
  })
  </script>
  