<template>
  <nav class="sticky top-0 z-40 w-full border-b border-gray-200 bg-white md:py-2">
    <div class="flex items-center justify-between h-[var(--navbar-height)] px-6 font-specialGothic">
      
      <!-- Left: Logo -->
      <div class="flex items-center gap-2">
        <router-link to="/" class="flex items-center gap-x-2 hover:opacity-80">
          <img 
            :src="logo" 
            alt="Astar Trading Agro Processing Company Limited" 
            class="rounded-full w-auto h-[50px] object-cover mix-blend-color-burn"
          />
          <div class="hidden md:block border-s ps-2 text-sm leading-4">
            Exac Tech <br /> Grouping Companies
          </div>
        </router-link>
      </div>

      <!-- Center: Navigation Links -->
      <ul class="hidden sm:flex gap-6 text-base items-center justify-center flex-1">
        <li><router-link to="/" class="hover:text-lime-500">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-lime-500 text-lime-500">About</router-link></li>
        <li><router-link to="/services" class="hover:text-lime-500">Services</router-link></li>
        <li><router-link to="/partners" class="hover:text-lime-500">Partners</router-link></li>
        <li><router-link to="/news" class="hover:text-lime-500">News</router-link></li>
        <li class="flex gap-x-4 border-s ps-5">
          <a href="https://web.facebook.com/profile.php?id=61571467306726" target="_blank" aria-label="Facebook">
            <i class="text-2xl fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/access_africa_home_and_abroad?igsh=MTZtN3dkZXp2dmNubw==" target="_blank" aria-label="Instagram">
            <i class="text-2xl fab fa-instagram" />
          </a>
        </li>
      </ul>

      <!-- Right: Contact Button + Mobile Toggle -->
      <div class="flex items-center gap-4">
        <router-link
          to="/contact"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-lime-500 text-white rounded-full hover:opacity-80"
        >
          Get In Touch
          <svg class="w-5 h-5 text-black bg-white rounded-full" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </router-link>

        <!-- Hamburger -->
        <button class="sm:hidden flex flex-col items-center justify-center w-6 h-6">
          <span class="block h-0.5 w-6 bg-black mb-1"></span>
          <span class="block h-0.5 w-6 bg-black mb-1"></span>
          <span class="block h-0.5 w-6 bg-black"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const logo = new URL('../assets/logo.png', import.meta.url).href
</script>
 