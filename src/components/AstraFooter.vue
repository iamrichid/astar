<!-- src/components/AppFooter.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <!-- Content goes here, add any other components or sections above the footer -->
      <div class="flex-grow">
        <!-- Your main content goes here -->
      </div>
  
      <!-- Sticky Footer -->
      <div class="sticky bottom-0 w-full bg-lime-600 px-12 py-8">
        <div class="flex size-full flex-col justify-between">
          <div class="flex shrink-0 flex-col items-start gap-8 text-neutral-300 md:flex-row md:gap-12">
            <!-- About Links -->
            <div class="flex flex-col">
              <h3 class="mb-2 text-2xl uppercase text-white">About</h3>
              <a href="/about">About Us</a>
              <a href="/news">News</a>
              <a href="/contact">Contact Us</a>
            </div>
            <!-- Disclaimers Links -->
            <div class="flex flex-col">
              <h3 class="mb-2 text-2xl uppercase text-white">Disclaimers</h3>
              <a href="/privacy">Privacy Policy</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
            <!-- Services Links -->
            <div class="flex flex-col">
              <h3 class="mb-2 text-2xl uppercase text-white">Services</h3>
              <a href="/services">Agriculture</a>
              <a href="/services">Minerals & Natural Resources</a>
              <a href="/services">Technology</a>
            </div>
            <!-- Partners Links -->
            <div class="flex flex-col">
              <h3 class="mb-2 text-2xl uppercase text-white">Partners</h3>
              <a href="/real-estate">Real Estate</a>
              <a href="/african-diaspora-126-plus">African Diaspora 126+</a>
              <a href="/aaha">Access Africa Home & Abroad (AAHA)</a>
            </div>
          </div>
  
          <!-- Marquee Text -->
          <div class="relative flex items-end justify-between text-neutral-100">
            <div class="absolute -left-14 bottom-5 mt-10 text-[3rem] leading-[0.8]">
              <div class="hidden w-full text-lime-200 opacity-35 md:block">
                <div speed="70" class="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] flex-row">
                  <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                  </div>
                  <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                  </div>
                  <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                  </div>
                  <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                    <p> AStar Trading &amp; Agro Processing Co. Ltd. — </p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Footer Text and Social Links -->
            <div class="w-full items-center justify-between pt-10 md:flex">
              <div>
                <a href="/">2025 © copyright — All Rights Reserved.</a>
              </div>
              <div class="flex items-center gap-10">
                <a target="_blank" href="https://web.facebook.com/profile.php?id=61571661246740">Facebook</a>
                <a target="_blank" href="https://www.instagram.com/astartrade?igsh=MXN0dnJpYnlzNDMyaQ==">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any logic or data here if necessary
  </script>
  
  <style scoped>
  /* Ensuring footer stays at the bottom */
  .sticky {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  
  /* Custom marquee animation */
  .group {
    animation: marquee 40s linear infinite;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* Additional footer custom styles */
  </style>
  
  
 
  
 
  
  
  
  