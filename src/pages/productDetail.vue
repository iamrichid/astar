<template>
    <div class="p-8">
      <h2 class="text-2xl font-bold mb-4 text-astar-navy">{{ product.name }}</h2>
      <p class="mb-2">{{ product.description }}</p>
      <p class="text-lg font-semibold text-astar-navy">${{ product.price }}</p>
      <OrderForm :product="product" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import OrderForm from '../components/OrderForm.vue'

  const route = useRoute()
  
  const allProducts = [
    { id: 1, name: 'Shea Butter', description: 'Raw, unrefined, high-quality', price: 250 },
    { id: 2, name: 'Soya Beans', description: 'Organically grown, bulk orders', price: 120 },
    { id: 3, name: 'Gold Dust', description: 'Available for vetted B2B trade', price: 10000 },
  ]
  
  const product = computed(() =>
    allProducts.find(p => p.id === parseInt(route.params.id))
  )
  </script>
  