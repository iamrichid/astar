<template>
    <form @submit.prevent="submitQuote" class="mt-6 bg-white p-4 rounded shadow max-w-md">
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
  import { useToast } from 'vue-toastification'


const toast = useToast()
const props = defineProps(['product'])
const router = useRouter()

 const form = reactive({
    name: '',
    email: '',
    message: '',
  })

const submitQuote = () => {
    const quoteData = {
            product: props.product,
            name: form.name,
            email: form.email,
            message: form.message,
            submittedAt: new Date().toLocaleString()
}

// Save this quote as the "last_quote"
localStorage.setItem('last_quote', JSON.stringify(quoteData))

// Append to all quotes
const existingQuotes = JSON.parse(localStorage.getItem('quotes') || '[]')
existingQuotes.push(quoteData)
localStorage.setItem('quotes', JSON.stringify(existingQuotes))


  console.log('Order submitted:', { ...form, product: props.product })
  toast.success("Quote submitted! We'll get back to you shortly.")


  // Optionally redirect after toast
  router.push('/confirmation')
}


  </script>
  
  <style scoped>
  .input {
    @apply block w-full p-2 mb-2 border rounded;
  }
  </style>
  