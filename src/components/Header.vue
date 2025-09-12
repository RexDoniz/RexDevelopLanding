<template>
  <header class="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 flex justify-between items-center px-4 py-2 shadow-lg">
    <RouterLink to="/" class="flex items-center no-underline gap-2">
      <img src="../assets/logo.webp" class="w-12 h-12 rounded-full" alt="Logo RexDevelop" />
      <h1 class="text-2xl font-bold text-pink-500">RexDevelop</h1>
    </RouterLink>

    <nav class="hidden md:flex items-center" aria-label="Navegación principal">
      <ul class="flex gap-8 list-none m-0 p-0">
        <li><RouterLink to="/" class="text-white no-underline font-semibold hover:text-pink-500">Inicio</RouterLink></li>
        <li><RouterLink to="/services" class="text-white no-underline font-semibold hover:text-pink-500">Servicios</RouterLink></li>
        <li><RouterLink to="/about" class="text-white no-underline font-semibold hover:text-pink-500">Nosotros</RouterLink></li>
        <li><RouterLink to="/contact" class="text-white no-underline font-semibold hover:text-pink-500">Contacto</RouterLink></li>
      </ul>
    </nav>

    <button
      class="md:hidden bg-transparent border-none text-white text-3xl cursor-pointer"
      :aria-expanded="isMobileMenuOpen"
      aria-label="Abrir menú"
      @click="toggleMobileMenu"
    >
      <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>

    <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      leave-active-class="transition-opacity ease-in-out duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg z-40 pt-16">
        <ul class="list-none m-0 p-4 flex flex-col gap-4">
          <li><RouterLink to="/" @click="closeMobileMenu" class="text-white no-underline text-lg font-semibold hover:text-pink-500">Inicio</RouterLink></li>
          <li><RouterLink to="/services" @click="closeMobileMenu" class="text-white no-underline text-lg font-semibold hover:text-pink-500">Servicios</RouterLink></li>
          <li><RouterLink to="/about" @click="closeMobileMenu" class="text-white no-underline text-lg font-semibold hover:text-pink-500">Nosotros</RouterLink></li>
          <li><RouterLink to="/contact" @click="closeMobileMenu" class="text-white no-underline text-lg font-semibold hover:text-pink-500">Contacto</RouterLink></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>
