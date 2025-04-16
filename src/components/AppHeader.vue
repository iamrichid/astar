<!-- src/components/AppHeader.vue -->
<template>
    <header class="bg-white p-4 shadow">

        
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/">
        <span class="flex items-center">
            <img :src="logo"  class="w-10 h-10" >
        <small class="sm:6/6 text-bold font-sans">Astar Trading & Agro <br> Processing Company Limited</small>
      </span>
    </router-link>
        <nav class="space-x-4">
          <router-link to="/" class="hover:text-astar-gold transition">Home</router-link>
          <router-link to="/quotes" class="hover:text-astar-gold transition">Quotes</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
 import logo from '../assets/logo.webp'
 </script>
  