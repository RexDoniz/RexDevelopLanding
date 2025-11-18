<template>
  <footer role="contentinfo" aria-label="Pie de página" class="w-full mt-24">
    <div class="max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-t-3xl p-10 md:p-16 shadow-elegant-lg">
      <div class="grid md:grid-cols-3 gap-12 mb-10">
        <!-- Información de la empresa -->
        <div class="reveal">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-400 shadow-lg">
              <img src="../assets/logo.webp" class="w-full h-full object-cover" alt="Logo RexDevelop" />
            </div>
            <h3 class="text-2xl font-bold gradient-text bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              RexDevelop
            </h3>
          </div>
          <p class="text-base text-gray-300 leading-relaxed mb-6">
            Soluciones digitales que impulsan tu crecimiento. Especialistas en desarrollo, marketing y contabilidad.
          </p>
          <p class="text-sm text-gray-400 flex items-center gap-2">
            <i class="pi pi-map-marker text-indigo-400"></i>
            Loma Dorada, Tonalá, Jalisco | Guadalajara, Jalisco
          </p>
        </div>

        <!-- Enlaces rápidos -->
        <div class="reveal" style="animation-delay: 0.1s">
          <h4 class="text-xl font-bold text-indigo-400 mb-6">Enlaces rápidos</h4>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/" class="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-base flex items-center gap-3 hover:translate-x-1">
                <i class="pi pi-arrow-right text-sm"></i>
                Inicio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-base flex items-center gap-3 hover:translate-x-1">
                <i class="pi pi-arrow-right text-sm"></i>
                Servicios
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-base flex items-center gap-3 hover:translate-x-1">
                <i class="pi pi-arrow-right text-sm"></i>
                Nosotros
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-300 hover:text-indigo-400 transition-all duration-300 text-base flex items-center gap-3 hover:translate-x-1">
                <i class="pi pi-arrow-right text-sm"></i>
                Contacto
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div class="reveal" style="animation-delay: 0.2s">
          <h4 class="text-xl font-bold text-indigo-400 mb-6">Síguenos</h4>
          <p class="text-base text-gray-300 mb-6 leading-relaxed">Conecta con nosotros en nuestras redes sociales</p>
          <div class="flex gap-4">
            <a 
              href="https://www.facebook.com/rexdevelop" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-12 h-12 bg-indigo-600/20 hover:bg-indigo-600 rounded-full flex items-center justify-center text-indigo-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f text-lg"></i>
            </a>
            <a 
              href="https://twitter.com/rexdevelop" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-12 h-12 bg-cyan-600/20 hover:bg-cyan-600 rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Twitter/X"
            >
              <i class="fab fa-x-twitter text-lg"></i>
            </a>
            <a 
              href="https://www.instagram.com/rexdevelop" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-12 h-12 bg-pink-600/20 hover:bg-pink-600 rounded-full flex items-center justify-center text-pink-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href="mailto:hola@rexdevelop.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-12 h-12 bg-gray-600/20 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Email"
            >
              <i class="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700/50 pt-8 mt-10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <span class="text-sm text-gray-400">
            &copy; {{ new Date().getFullYear() }} RexDevelop. Todos los derechos reservados.
          </span>
          <div class="flex gap-8 text-sm text-gray-400">
            <a href="#" class="hover:text-indigo-400 transition-colors duration-300">Política de Privacidad</a>
            <a href="#" class="hover:text-indigo-400 transition-colors duration-300">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        if (observer) observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
