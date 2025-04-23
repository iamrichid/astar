<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <!-- Left Section: Welcome Section -->
      <router-link to="/astra"
       class="bg-white rounded-2xl pt-4 p-4 md:col-span-1 flex flex-col justify-start space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-black">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>
        <div class="h-full flex-col items-start justify-start space-y-3">

          <h1 class="text-4xl font-specialGothic leading-10 md:text-5xl md:leading-[3rem] font-bold mb-4 md:pt-20">
            Astar Trading & Agro Processing Company Limited
          </h1>
          <p class="text-left text-base text-gray-500">
            From the fertile farmlands to vast mineral reserves and energy resources, Astar Trading is your trusted bridge into Africa’s booming trade sectors — empowering local producers and connecting them with global markets.
          </p>
        </div>
     
      </router-link>

      <router-link to="/diaspora" class="bg-lime-700 rounded-2xl pt-4 p-4 md:col-span-1 flex flex-col justify-start space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out relative ">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-white">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>

        <div class="h-full flex-col items-start justify-start space-y-3">
          <h1 class="text-4xl text-lime-300 font-specialGothic leading-10 md:text-5xl md:leading-[3rem] font-bold mb-4 md:pt-20">
            African Diaspora 126+
          </h1>
          <p class="text-left text-base text-white">
            A non-profit organization focused on supporting the African diaspora. We advocate for the Right of Return, ensuring that people of African descent have the opportunity to reconnect with their heritage. Our work includes lobbying for policies that recognize and facilitate the return of diasporas to their ancestral homes.
          </p>
        </div>
      </router-link>

      <router-link
      to="/products" class="bg-blue-700 rounded-2xl pt-4 p-4 md:col-span-1 flex flex-col justify-start space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute right-3 top-3 text-white">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>

              <div class="h-full flex-col items-start justify-start space-y-3">
                <h1 class="text-4xl text-blue-300 font-specialGothic leading-10 md:text-5xl md:leading-[3rem] font-bold mb-4 md:pt-20">
                  Access Africa Home & Abroad (AAHA)
                </h1>
                <p class=" text-left  text-base capitalize text-white">
                  AAHA is dedicated to helping individuals pursue opportunities abroad, whether for work, education, or specialized training. Our primary focus is on providing assistance to those aiming to travel to the UK, US, or Canada. We handle everything from visa applications to securing employment or school placements, ensuring a hassle-free journey.
                </p>
              </div>
      </router-link>
     
      
    </div>

  </template>
  
  <script setup>



  </script>
  