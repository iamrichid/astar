<template>
    <div class="p-8">
      <h2 class="text-3xl font-bold mb-6 text-astar-navy">Available Products</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="border rounded p-4 shadow">
          <h3 class="text-xl font-semibold">{{ product.name }}</h3>
          <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
          <p class="font-bold text-astar-navy">${{ product.price }}</p>
          <router-link :to="`/products/${product.id}`" class="text-astar-gold underline">View</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const products = [
    { id: 1, name: 'Shea Butter', description: 'Raw, unrefined, high-quality', price: 250 },
    { id: 2, name: 'Soya Beans', description: 'Organically grown, bulk orders', price: 120 },
    { id: 3, name: 'Gold Dust', description: 'Available for vetted B2B trade', price: 10000 },
  ];
  </script>
  