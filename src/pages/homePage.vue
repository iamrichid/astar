<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
      <!-- Left Section: Welcome Section -->
      <div class="bg-white rounded-2xl p-4 md:col-span-3 flex flex-col justify-start space-y-4">
        <div class="h-full flex-col items-start justify-start space-y-3">
          <h1 class="text-4xl font-specialGothic leading-10 md:text-5xl md:leading-[3rem] font-bold mb-4 md:pt-20">
            Astar Trading & Agro Processing Company Limited
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
  
      
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-5 mt-3">
      <!-- Left Section: Welcome Section -->
      <div class=" relative col-span-2 flex aspect-auto flex-col justify-end  rounded-2xl
        bg-lime-700 p-4 text-base  leading-[1.12rem] text-white md:p-8 ">
        <div class="h-full flex-col items-start justify-start space-y-3">
          <h1 class="leadig-[2.9rem] text-5xl text-lime-300 font-specialGothic ">
            African Diaspora 126+
          </h1>
          <p class=" text-left  text-base capitalize text-white">
            A non-profit organization focused on supporting the African diaspora. We advocate for the Right of Return, ensuring that people of African descent have the opportunity to reconnect with their heritage. Our work includes lobbying for policies that recognize and facilitate the return of diasporas to their ancestral homes.
          </p>
        </div>
      </div>
  
      <!-- Product Link -->
      <span class="col-span-2 flex flex-col space-y-2 rounded-2xl">
       <img :src="AfricaDiaspora" alt="" class="rounded-2xl">
      </span>
  
      <!-- Quotes Status Link -->
      <router-link to="#" class="relative col-span-1 flex aspect-square flex-col justify-end space-y-2 rounded-2xl bg-black p-4 text-base text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-white">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>
        <h1 class="font-semibold"> <b>ONBOARDING</b> </h1> 
        <small class="text-white">We envision a vibrant Africa enriched by the presence, talents, and contributions of its Diaspora descendants. Through shared heritage and collective support, we strive for an Africa where everyone with roots in this land can once again call it home.</small>
      </router-link>
  
      
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-5 mt-3">
      <!-- Left Section: Welcome Section -->
      <div class="relative col-span-3 flex aspect-auto flex-col  justify-center space-y-3 rounded-2xl
        bg-blue-700 p-4 text-base  leading-[1.12rem] text-white md:p-8 ">
        <div class="h-full flex-col items-start justify-start space-y-3">
          <h1 class="leadig-[2.9rem] text-5xl text-blue-400 font-specialGothic ">
            Access Africa Home & Abroad (AAHA)
          </h1>
          <p class=" text-left  text-base capitalize text-white">
            AAHA is dedicated to helping individuals pursue opportunities abroad, whether for work, education, or specialized training. Our primary focus is on providing assistance to those aiming to travel to the UK, US, or Canada. We handle everything from visa applications to securing employment or school placements, ensuring a hassle-free journey.
          </p>
        </div>
      </div>

      <!-- Product Link -->
      <span class="col-span-2 flex flex-col space-y-2 rounded-2xl">
       <img :src="AAHB" alt="" class="rounded-2xl">
      </span>
  
     
  
      
    </div>

  </template>
  
  <script setup>
  import AfricaDiaspora from '../assets/aaha.webp'
  import AAHB from '../assets/airport2.webp'


  </script>
  