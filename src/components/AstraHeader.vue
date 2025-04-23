<template>
  <nav class="sticky top-0 inset-x-0 z-40 w-full border-b border-divider bg-white md:py-2 data-[menu-open=true]:border-none">
    <header class="z-40 flex w-full max-w-full items-center justify-between px-6 gap-4 h-[var(--navbar-height)] font-specialGothic">
      <!-- Logo -->
      <ul class="flex flex-1 h-full items-center justify-start gap-4">
        <div class="flex items-center gap-x-2">
          <router-link to="/" class="flex items-center gap-x-2 text-medium text-primary ">
            <li class="flex items-center gap-x-2 list-none whitespace-nowrap">
              <img
                alt="Astar Trading Agro Processing Company Limited"
                :src="logo"
                width="300"
                height="300"
                class="rounded-full"
                style=" width: 100%; height: 50px;"
              />
              <div class="hidden px-2 text-sm md:block md:text-md md:leading-4 border-s">
                Astar Trading Agro<br />
                Processing Company Limited
              </div>
            </li>
          </router-link>
        </div>
      </ul>

      <!-- Navigation Links -->
      <ul class="hidden sm:flex flex-1 h-full items-center justify-center gap-x-4 px-16 text-base rounded-full" data-justify="center">
        <li v-for="(link, index) in navLinks" :key="index" class="list-none whitespace-nowrap text-medium">
          <a
            :href="link.href"
            class="inline-flex items-center text-foreground hover:text-lime-500 transition-opacity no-underline"
            :class="{ 'text-lime-500': link.active }"
          >
            {{ link.label }}
          </a>
        </li>

        <!-- Social Icons -->
        <li class="hidden md:flex items-center gap-x-4 border-s px-5">
          <a
            href="https://web.facebook.com/profile.php?id=61571467306726"
            target="_blank"
            class="text-primary hover:opacity-80 transition-opacity"
          >
            <svg class="text-2xl" viewBox="0 0 512 512" fill="currentColor">
              <path d="M512 256C512 114.6..." />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/access_africa_home_and_abroad?igsh=MTZtN3dkZXp2dmNubw=="
            target="_blank"
            class="text-primary hover:opacity-80 transition-opacity"
          >
            <svg class="text-2xl" viewBox="0 0 448 512" fill="currentColor">
              <path d="M224.1 141c-63.6 0..." />
            </svg>
          </a>
        </li>
      </ul>

      <!-- Contact & Mobile Menu -->
      <ul class="flex flex-1 h-full items-center justify-end gap-4" data-justify="end">
        <li class="text-medium whitespace-nowrap">
          <a
            href="/contact"
            class="inline-flex items-center gap-2 rounded-full bg-lime-500 px-3 pl-5 pr-1 text-white text-[0.9rem] uppercase hover:opacity-80 transition-opacity"
          >
            Get In Touch
            <svg
              class="lucide lucide-arrow-up-right bg-white text-black rounded-full"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </li>

        <!-- Mobile Menu Button -->
        <button
          class="sm:hidden flex items-center justify-center w-6 h-full"
          aria-label="Open menu"
          aria-pressed="false"
        >
          <span class="sr-only">Open navigation menu</span>
          <span class="flex flex-col items-center justify-center w-full h-full text-inherit">
            <span class="block w-6 h-px bg-current transition-transform duration-150 -translate-y-1 group-data-[open=true]:translate-y-px group-data-[open=true]:rotate-45"></span>
            <span class="block w-6 h-px bg-current transition-transform duration-150 translate-y-1 group-data-[open=true]:-rotate-45"></span>
          </span>
        </button>
      </ul>
    </header>
  </nav>
</template>

<script setup>
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Home', href: '/', active: false },
  { label: 'About', href: '/about', active: true },
  { label: 'Services', href: '/services', active: false },
  { label: 'Partners', href: '/partners', active: false },
  { label: 'News', href: '/news', active: false },
]
</script>
