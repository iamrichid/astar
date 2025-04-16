<template>
<div class="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
  <div class="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
    <!-- Left Side: Product Description -->
    <div class="flex-1">
      <h2 class="text-4xl font-bold text-astar-navy mb-4">{{ product.name }}</h2>
      <p class="text-base text-gray-600 mb-4">{{ product.description }}</p>
      <p class="text-3xl font-semibold text-astar-navy mb-6">${{ product.price }}</p>
      <router-link to="/products" class=" font-medium underline  transition-colors duration-200">All products</router-link>
    </div>

    <!-- Right Side: Order Form -->
    <div class="flex-1  p-6 rounded-2xl ">
      <OrderForm :product="product" />
    </div>
  </div>
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
    { id: 4, name: 'Palm Oil', description: 'Freshly harvested, sustainable production', price: 150 },
    { id: 5, name: 'Cocoa Beans', description: 'Premium quality for chocolate production', price: 350 },
    { id: 6, name: 'Mango Butter', description: 'Natural, nourishing for skincare', price: 280 },
    { id: 7, name: 'Cotton Seeds', description: 'GMO-free, ideal for farming', price: 80 },
    { id: 8, name: 'Sesame Seeds', description: 'Organic, rich in nutrients', price: 95 },
    { id: 9, name: 'Organic Honey', description: 'Pure and unprocessed, from local farms', price: 200 },
    { id: 10, name: 'Baobab Powder', description: 'Rich in vitamin C, for smoothies and health products', price: 450 },
    { id: 11, name: 'Coffee Beans', description: 'Freshly roasted, high-quality blend', price: 220 },
    { id: 12, name: 'Turmeric Root', description: 'Raw, high-quality for medicinal use', price: 180 },
    { id: 13, name: 'Ginger Root', description: 'Freshly harvested, ideal for cooking and health benefits', price: 130 },
    { id: 14, name: 'Bamboo Charcoal', description: 'Natural, used for filtration and skincare', price: 90 },
    { id: 15, name: 'Aloe Vera Gel', description: 'Freshly extracted, soothing for skin care', price: 160 },
];
  
  const product = computed(() =>
    allProducts.find(p => p.id === parseInt(route.params.id))
  )
  </script>
  