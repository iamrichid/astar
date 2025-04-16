<template>
    <div class="flex items-center justify-center h-screen bg-gradient-to-br from-[#002c3e] to-[#c8a13d] text-white">
      <div class="text-center animate-fade-in">
        <h1 class="text-4xl font-bold mb-2">Exac Group</h1>
        <p class="text-lg mb-6">Building the next Gen Apps.</p>
        <p class="text-sm text-white/70">Loading app...</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-in forwards;
  }
  </style>
  