<template>
    <div class="max-w-xl mx-auto py-16 px-4 text-center">
      <h1 class="text-3xl font-bold text-green-700 mb-4">Thank you for your quote!</h1>
      <p class="mb-6 text-gray-600">We've received your request and will follow up shortly.</p>
  
      <div v-if="quote" class="bg-white shadow-md rounded p-4 text-left">
        <h2 class="font-semibold mb-2">Quote Summary:</h2>
        <p><strong>Product:</strong> {{ quote.product }}</p>
        <p><strong>Quantity:</strong> {{ quote.quantity }}</p>
        <p><strong>Name:</strong> {{ quote.name }}</p>
        <p><strong>Email:</strong> {{ quote.email }}</p>
      </div>
  
      <router-link to="/quotes" class="text-blue-700 underline">View Past Quotes</router-link>
      <router-link to="/" class="mt-6 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
        Place Another Quote
      </router-link>

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
  