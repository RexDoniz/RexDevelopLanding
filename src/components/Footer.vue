<template>
  <footer role="contentinfo" aria-label="Pie de página" class="w-full">
    <div class="max-w-4xl mx-auto bg-gray-800 text-white rounded-t-lg p-4 shadow-lg">
      <div class="flex justify-between items-center flex-wrap gap-4 mb-4 text-left">
        <div class="flex-1 min-w-[170px]">
          <h3 class="text-lg font-bold text-indigo-400">RexDevelop</h3>
          <p class="text-sm text-pink-400 italic opacity-80">Soluciones digitales que impulsan tu crecimiento</p>
        </div>
        <div class="flex-1 min-w-[170px] text-right">
          <h4 class="text-md font-semibold text-indigo-400 mb-2">Síguenos en redes</h4>
          <div class="flex gap-4 justify-end">
            <a href="https://www.facebook.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-white" aria-label="Facebook">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-white" aria-label="Twitter/X">
              <i class="fab fa-x-twitter text-xl"></i>
            </a>
            <a href="https://www.instagram.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-white" aria-label="Instagram">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="mailto:hola@rexdevelop.com" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-white" aria-label="Email">
              <i class="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-2 text-center">
        <span class="text-xs text-gray-400">&copy; {{ new Date().getFullYear() }} RexDevelop. Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No JS necesario
</script>
