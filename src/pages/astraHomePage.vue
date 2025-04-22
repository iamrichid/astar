<template>
   
   <section id="call-to action">
         <div class="rounded p-4 align-text-center flex flex-col gap-4">
            <article class="flex justify-between shadow-lg p-4" >

               <h1 class="text-gray-900 mt-2">            
                  Our vast network, market expertise, and commitment to reliable supply make us a trusted partner in commodity trading
               </h1>
               <button class="text-white bg-gray-900 rounded p-2">Start Trading Now!</button>
            </article>

            <div class="overflow-x-auto shadow-lg p-1 ">
                <!-- Tabs -->
            <div class="flex space-x-4 border-b mb-4">
               <button
               v-for="(commodity, i) in Object.keys(data)"
               :key="i"
               @click="selectedCommodity = commodity"
               :class="[
                  'py-2 px-4 font-semibold',
                  selectedCommodity === commodity
                     ? 'border-b-2 border-green-600 text-green-700'
                     : 'text-gray-500 hover:text-green-600',
               ]"
               >
               {{ commodity }}
               </button>
            </div>

            <!-- Search -->
            <div class="mb-4">
               <input
               v-model="searchQuery"
               type="text"
               placeholder="Search seller, location, or grade"
               class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
               />
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
               <table class="min-w-full bg-white shadow rounded-lg">
               <thead class="bg-gray-100 text-gray-700 uppercase text-sm">
                  <tr>
                     <th class="px-4 py-3 text-left">Seller</th>
                     <th class="px-4 py-3 text-left">Location</th>
                     <th class="px-4 py-3 text-left">Grade</th>
                     <th class="px-4 py-3 text-left">Quantity (MT)</th>
                     <th class="px-4 py-3 text-left">Price/MT</th>
                     <th class="px-4 py-3 text-left">Incoterms</th>
                     <th class="px-4 py-3 text-left">Delivery Time</th>
                     <th class="px-4 py-3 text-left">Last Updated</th>
                     <th class="px-4 py-3 text-left">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr
                     v-for="(trade, index) in filteredTrades"
                     :key="index"
                     class="border-t hover:bg-gray-50"
                  >
                     <td class="px-4 py-3">{{ trade.seller }}</td>
                     <td class="px-4 py-3">{{ trade.location }}</td>
                     <td class="px-4 py-3">{{ trade.grade }}</td>
                     <td class="px-4 py-3">{{ trade.quantity }}</td>
                     <td class="px-4 py-3">${{ trade.price }}</td>
                     <td class="px-4 py-3">{{ trade.incoterms }}</td>
                     <td class="px-4 py-3">{{ trade.deliveryTime }}</td>
                     <td class="px-4 py-3">{{ trade.lastUpdated }}</td>
                     <td class="px-4 py-3">
                     <button class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                        Buy
                     </button>
                     </td>
                  </tr>
               </tbody>
               </table>
            </div>
            </div>
         </div>
   </section>

   <!--Comodities we trade in  -->
   <section>
      <h2 class="text-2xl font-bold mb-4">Commodities We Trade</h2>
      
      <swiper
        :space-between="20"
        :slides-per-view="1"
        :breakpoints="breakpoints"
        class="my-8"
      >
        <!-- Loop through each commodity -->
        <swiper-slide v-for="(commodity, index) in commodities" :key="index">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="commodity.image" alt="Commodity" class="w-full h-48 object-cover"/>
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ commodity.name }}</h3>
              <p class="text-gray-600 my-2">{{ commodity.description }}</p>
              <router-link :to="commodity.tradeLink">
                <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Trade Now
                </button>
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section class=" bg-white">
      <div class="">
         <h2 class="text-2xl font-bold mb-4">Key Commodities & Sectors</h2>
         
         <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <!-- Agriculture Card -->
            <div class="bg-green-50 border border-green-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div class="text-4xl mb-4">🌽</div>
            <h3 class="text-xl font-semibold">Agriculture</h3>
            <p class="text-gray-600 mt-2">Grains, pulses, cash crops, and fresh produce across Africa.</p>
            </div>

            <!-- Minerals Card -->
            <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div class="text-4xl mb-4">⛏️</div>
            <h3 class="text-xl font-semibold">Minerals</h3>
            <p class="text-gray-600 mt-2">Gold, bauxite, lithium, and other valuable mineral exports.</p>
            </div>

            <!-- Energy Card -->
            <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div class="text-4xl mb-4">🔋</div>
            <h3 class="text-xl font-semibold">Energy</h3>
            <p class="text-gray-600 mt-2">Crude oil, natural gas, biomass, and emerging clean energy.</p>
            </div>
         </div>

         <!-- CTA Button -->
         <a href="#marketplace" class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition">
            See What's Trading Now
         </a>
      </div>
      </section>


      <section class="py-16 bg-gray-50">
  <div class=" mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">Why Choose Us?</h2>
    <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
      Astar-Trade empowers African traders by creating a secure, transparent, and growth-focused marketplace. Here’s what makes us stand out:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature 1 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <div class="text-green-600 text-3xl mb-4">✅</div>
        <h3 class="text-xl font-semibold mb-2">Verified Buyers & Sellers</h3>
        <p class="text-gray-600">We ensure every trader on our platform is vetted for reliability and legitimacy.</p>
      </div>

      <!-- Feature 2 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <div class="text-green-600 text-3xl mb-4">📊</div>
        <h3 class="text-xl font-semibold mb-2">Market Insights</h3>
        <p class="text-gray-600">Stay informed with real-time commodity prices, trends, and export data across Africa.</p>
      </div>

      <!-- Feature 3 -->
      <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <div class="text-green-600 text-3xl mb-4">🔒</div>
        <h3 class="text-xl font-semibold mb-2">Secure & Transparent</h3>
        <p class="text-gray-600">We use modern tools to ensure your data and transactions are safe and fully traceable.</p>
      </div>
    </div>
  </div>
     </section>

     <section id="contact" class="py-16 bg-white">
  <div class=" mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
    <p class="text-gray-600 mb-8">
      Have questions, ideas, or want to start trading? We’d love to hear from you. Fill out the form below or email us directly.
    </p>

    <!-- Contact Form -->
    <form class="space-y-6">
      <div>
        <input type="text" name="name" placeholder="Your Name"
               class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" required>
      </div>
      <div>
        <input type="email" name="email" placeholder="Your Email"
               class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" required>
      </div>
      <div>
        <textarea name="message" rows="5" placeholder="Your Message"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
      </div>
      <div>
        <button type="submit"
                class="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
          Send Message
        </button>
      </div>
    </form>

    <!-- Optional email fallback -->
    <p class="text-sm text-gray-500 mt-6">
      Or email us directly at:  
      <a href="mailto:info@astar-trade.com" class="text-green-600 hover:underline">info@astar-trade.com</a>
    </p>
  </div>
</section>

  


 </template>
 
 <script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// List of commodities
      const commodities = [
      { 
         name: 'Maize', 
         description: 'A staple crop with great demand across the region.', 
         image: '../assets/maize.jpg', 
         tradeLink: '/commodity/maize' 
      },
      { 
         name: 'Rice', 
         description: 'High-quality rice for various market segments.', 
         image: '/public/rice.jpg', 
         tradeLink: '/commodity/rice' 
      },
      { 
         name: 'Soybeans', 
         description: 'Versatile crop used in various industries, from food to biofuel.', 
         image: '/public/soyabeans.jpg', 
         tradeLink: '/commodity/soybeans' 
      },
      { 
         name: 'Wheat', 
         description: 'Essential crop with global demand, especially for bread making.', 
         image: '/public/wheat.jpg', 
         tradeLink: '/commodity/wheat' 
      },
      { 
         name: 'Sugarcane', 
         description: 'Vital for sugar production and biofuel manufacturing.', 
         image: '/public/sugarcane.jpg', 
         tradeLink: '/commodity/sugarcane' 
      }
      ]

      // Breakpoints for Swiper (Responsive)
      const breakpoints = {
      640: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 4,
      },
      }

// Sample data per commodity
      const data = {
      Maize: [
         { seller: "AgroCorp Ltd", location: "Kampala, UG", grade: "A", quantity: 50, price: 240, incoterms: "FOB", deliveryTime: "7 days", lastUpdated: "2h ago" },
         { seller: "GreenField Agro", location: "Eldoret, KE", grade: "A", quantity: 75, price: 255, incoterms: "EXW", deliveryTime: "5 days", lastUpdated: "20m ago" },
         // ...more maize data
      ],
      Rice: [
         { seller: "Delta Rice Co.", location: "Accra, GH", grade: "B", quantity: 100, price: 380, incoterms: "CIF", deliveryTime: "10 days", lastUpdated: "1d ago" },
         { seller: "Riverbank Traders", location: "Monrovia, LR", grade: "A", quantity: 60, price: 400, incoterms: "FOB", deliveryTime: "6 days", lastUpdated: "3h ago" },
      ],
      Soybeans: [
         { seller: "Nile Agro", location: "Juba, SS", grade: "C", quantity: 120, price: 270, incoterms: "EXW", deliveryTime: "9 days", lastUpdated: "5h ago" },
         { seller: "Makeni Agro Ltd", location: "Makeni, SL", grade: "B", quantity: 140, price: 300, incoterms: "FOB", deliveryTime: "8 days", lastUpdated: "1h ago" },
      ]
      }

      const selectedCommodity = ref("Maize")
      const searchQuery = ref("")

      // Computed filter logic
      const filteredTrades = computed(() => {
      return data[selectedCommodity.value].filter((trade) => {
         const q = searchQuery.value.toLowerCase()
         return (
            trade.seller.toLowerCase().includes(q) ||
            trade.location.toLowerCase().includes(q) ||
            trade.grade.toLowerCase().includes(q)
         )
      })
      })
 
 </script>


<style scoped>
/* Custom styles for the carousel */
.swiper-slide {
  width: 100%;
  max-width: 300px;
}
</style>
 
 
 

