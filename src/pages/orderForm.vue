<template>
    <form @submit.prevent="submit" class="mt-6 bg-white p-4 rounded shadow max-w-md">
      <h3 class="text-xl font-semibold mb-4 text-astar-navy">Request a Quote</h3>
      <input v-model="form.name" placeholder="Your Name" class="input" />
      <input v-model="form.email" placeholder="Email" class="input" />
      <textarea v-model="form.message" placeholder="Message" class="input"></textarea>
      <button type="submit" class="mt-4 bg-astar-navy text-astar-gold px-4 py-2 rounded">Send</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  
  const props = defineProps(['product'])
  const router = useRouter()
  
  const form = reactive({
    name: '',
    email: '',
    message: '',
  })
  
  const submit = () => {
    const quoteData = {
      product: props.product, // pulled from props
      message: form.message,
      name: form.name,
      email: form.email,
      submittedAt: new Date().toLocaleString()
    }
  
    // Save the last quote for confirmation page
    localStorage.setItem('last_quote', JSON.stringify(quoteData))
  
    // Save all quotes
    const existingQuotes = JSON.parse(localStorage.getItem('quotes') || '[]')
    existingQuotes.push(quoteData)
    localStorage.setItem('quotes', JSON.stringify(existingQuotes))
  
    console.log('Order submitted:', quoteData)
    router.push('/confirmation')
  }
  </script>

  
  <style scoped>
  .input {
    @apply block w-full p-2 mb-2 border rounded;
  }
  </style>
  