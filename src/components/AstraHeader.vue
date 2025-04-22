<!-- src/components/AppHeader.vue -->
<template>
  <nav class="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 border-b border-divider navbar  bg-white md:py-2">
    <header class="z-40 flex px-6 gap-4 w-full flex-row  flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-full font-specialGothic flex-3">
      <ul class="flex flex-1 gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 md:!px-0">
        <div class="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border">

          <!-- Logo and COmpany Name -->
          <router-link class="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex items-center justify-between gap-x-2">
            <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold flex items-center gap-x-2">
              <img alt="Astar Trading Agro Processing Company Limited" 
              width="300" height="300" 
                class="rounded-full"
                style="color:transparent;width:100%;height:50px;mix-blend-mode:color-burn"  
                 :src="logo">
                 <div class="md:text-md hidden border-s px-2 text-sm md:block md:leading-4">Astar Trading Agro<br> Processing Company Limited</div>    
            </li>
          </router-link>
        </div>
      </ul>

      <!-- Links -->
      <ul class="gap-4 h-full flex-1 flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden gap-x-4 rounded-full px-16 sm:flex text-base" data-justify="center">
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500" color="foreground" href="/">Home</a>
        </li> 
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500 text-lime-500" color="foreground" href="/about">About</a>
        </li>
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500" color="foreground" href="/services">Services</a>
        </li>
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500" color="foreground" href="/partners">Partners</a>
        </li>
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-medium hover:text-lime-500" color="foreground" href="/news">News</a>
        </li>
        <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
          <div class="hidden  items-center gap-x-4 border-s px-5 md:flex "><a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity" href="https://web.facebook.com/profile.php?id=61571467306726" target="_blank" tabindex="0" role="link">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
            </svg></a>
            <a class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity" href="https://www.instagram.com/access_africa_home_and_abroad?igsh=MTZtN3dkZXp2dmNubw==" target="_blank" tabindex="0" role="link">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">

              </path>
            </svg>
          </a>
        </div>
      </li>
      </ul>

      <!-- General Links -->
      <ul class="flex-1 flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0" data-justify="end">
      <li class="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
        <div class="flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-lime-500 md:my-6 md:py-0 md:ps-6">
          <a class="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover rounded-full bg-lime-500 pl-5 pr-1 uppercase text-white" href="/contact" tabindex="0" role="button">
            <span class=" text-[0.9rem] ">Get In Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right rounded-full  bg-white text-black" aria-hidden="true" focusable="false" tabindex="-1">
              <path d="M7 7h10v10">
              </path><path d="M7 17 17 7">
              </path>
            </svg>
          </a>
          <div>

          </div>
        </div>
      </li>
      <button class="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 sm:hidden" type="button" aria-label="Open menu" aria-pressed="false">
        <span class="sr-only">open navigation menu</span>
        <span class="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
      </button>
      </ul>

    </header>
  </nav>
  </template>
  
  <script setup>
 import logo from '../assets/Business Emblem with Ghanaian Identity.png'
 </script>
  