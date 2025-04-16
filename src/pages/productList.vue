<template>
    <div class="p-8">
      <h2 class="text-3xl font-bold mb-6 font-specialGothic">Available Products</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4 relative">
  <!-- SVG Arrow Icon -->
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute top-4 right-4 text-astar-gold hover:text-astar-gold-dark transition-colors duration-200">
    <path d="M7 7h10v10"></path>
    <path d="M7 17 17 7"></path>
  </svg>

  <!-- Product Name -->
  <h3 class="text-2xl font-semibold text-astar-navy">{{ product.name }}</h3>

  <!-- Product Description -->
  <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>

  <!-- Price (Increased size) -->
  <p class="text-3xl font-bold text-astar-navy">${{ product.price }}</p>

  <!-- View Link -->
  <router-link :to="`/products/${product.id}`" class="text-astar-gold font-medium underline hover:text-astar-gold-dark transition-colors duration-200">View Details</router-link>
</div>

      </div>
    </div>
  </template>
  
  <script setup>
  const products = [
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

  </script>
  