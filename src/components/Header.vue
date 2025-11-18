<template>
  <header 
    :class="[
      'fixed w-full top-0 left-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gray-900'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <RouterLink 
        to="/" 
        class="flex items-center gap-3 no-underline group"
        aria-label="Ir a inicio"
      >
        <div class="relative">
          <img 
            src="../assets/logo.webp" 
            class="w-12 h-12 rounded-full transition-transform duration-300 group-hover:scale-110" 
            alt="Logo RexDevelop"
            loading="eager"
          />
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </div>
        <h1 :class="[
          'text-2xl font-bold transition-colors',
          isScrolled ? 'text-indigo-600' : 'text-pink-500'
        ]">
          RexDevelop
        </h1>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Navegación principal">
        <ul class="flex gap-2 list-none m-0 p-0">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink 
              :to="item.path" 
              :class="[
                'relative no-underline font-semibold transition-all duration-300 px-4 py-2 rounded-lg group',
                isScrolled 
                  ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                  : 'text-white hover:text-pink-500 hover:bg-white/10'
              ]"
              active-class="active-link"
            >
              {{ item.label }}
              <span 
                :class="[
                  'absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 rounded-full',
                  isScrolled ? 'bg-indigo-600' : 'bg-pink-500',
                  'group-hover:w-3/4'
                ]"
              ></span>
            </RouterLink>
          </li>
        </ul>

      </nav>

      <!-- Mobile Menu Button -->
      <button
        :class="[
          'md:hidden bg-transparent border-none cursor-pointer p-2 transition-colors',
          isScrolled ? 'text-gray-700' : 'text-white'
        ]"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Abrir menú"
        @click="toggleMobileMenu"
      >
        <i :class="[
          'text-2xl transition-transform',
          isMobileMenuOpen ? 'fas fa-times rotate-90' : 'fas fa-bars'
        ]"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-md z-40"
        @click="closeMobileMenu"
      >
        <nav class="p-6">
          <ul class="list-none m-0 p-0 flex flex-col gap-4">
            <li v-for="item in navItems" :key="item.path">
              <RouterLink 
                :to="item.path" 
                @click="closeMobileMenu"
                class="text-white no-underline text-xl font-semibold hover:text-pink-500 transition-colors block py-3 border-b border-gray-700"
              >
                {{ item.label }}
              </RouterLink>
            </li>
            <li class="pt-4 flex items-center justify-between">
              <span class="text-white font-semibold">Tema oscuro</span>
              <InputSwitch 
                :modelValue="isDark"
                @update:modelValue="toggleTheme"
              />
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useStore } from 'vuex'
import InputSwitch from 'primevue/inputswitch'

const store = useStore()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isDark = computed(() => store.state.theme.isDark)

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/services', label: 'Servicios' },
  { path: '/about', label: 'Nosotros' },
  { path: '/contact', label: 'Contacto' }
]

function toggleTheme() {
  store.dispatch('theme/toggleTheme')
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  store.dispatch('theme/init')
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.active-link {
  color: var(--primary-color);
  background-color: rgba(99, 102, 241, 0.1);
}

.active-link span {
  width: 3/4 !important;
}
</style>
