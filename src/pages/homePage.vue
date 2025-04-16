<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
      <!-- Left Section: Welcome Section -->
      <div class="bg-white rounded-2xl p-4 md:col-span-3 flex flex-col justify-start space-y-4">
        <div class="h-full flex-col items-start justify-start space-y-3">
          <h1 class="text-4xl font-specialGothic leading-10 md:text-5xl md:leading-[3rem] font-bold mb-4 md:pt-20">
            Welcome to Astar Trading
          </h1>
          <p class="text-left text-base text-gray-500">
            From the fertile farmlands to vast mineral reserves and energy resources, Astar Trading is your trusted bridge into Africa’s booming trade sectors — empowering local producers and connecting them with global markets.
          </p>
        </div>
      </div>
  
      <!-- Product Link -->
      <router-link to="/products" class="relative col-span-1 flex aspect-square flex-col justify-end space-y-2 rounded-2xl bg-black p-4 text-base text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-white">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>
        <h1 class="text-lime-500 font-semibold"> <b>BROWSE PRODUCTS</b> </h1> 
        <p class="text-sm"> We focus on high-growth sectors, including energy, agriculture, infrastructure, and technology, offering investors unique opportunities for meaningful returns.</p>
      </router-link>
  
      <!-- Quotes Status Link -->
      <router-link to="/quotes" class="relative col-span-1 flex aspect-square flex-col justify-end space-y-2 rounded-2xl bg-lime-600 p-4 text-base text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-white">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>
        <h1 class="font-semibold"> <b>VIEW QUOTES STATUS</b> </h1> 
        <small class="text-white"> Track the progress and status of your submitted trade quotes in real-time.</small>
      </router-link>
  
      <!-- Cover Image Section -->
      <div class="col-span-1 md:col-span-5 rounded-2xl bg-white p-4">
        <span>
          <img :src="cover_image" alt="Cover Image" class="w-full h-auto rounded-xl" />
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import cover_image from '../assets/countryside-workers-out-field.jpg'
  </script>
  