<!-- src/components/AppHeader.vue -->
<template>
    <header class="bg-astar-navy text-white p-4 shadow">

        
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Astar Trading</h1>
        <nav class="space-x-4">
          <router-link to="/" class="hover:text-astar-gold transition">Home</router-link>
          <router-link to="/quotes" class="hover:text-astar-gold transition">Quotes</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup></script>
  