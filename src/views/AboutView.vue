<template>
  <div class="flex justify-center items-start py-24 px-4 md:px-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="w-full max-w-7xl">
      <div class="text-center mb-16 reveal">
        <h1 class="text-5xl md:text-6xl font-bold gradient-text mb-6">Sobre Nosotros</h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conoce más sobre nuestra empresa, misión, visión y valores
        </p>
      </div>

      <Accordion :active-index="0" class="reveal-scale">
        <AccordionTab>
          <template #header>
            <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-xl">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <i class="pi pi-info-circle text-3xl text-white"></i>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-indigo-600">Sobre RexDevelop</h3>
                <p class="text-sm text-indigo-500 mt-1">Nuestra historia</p>
              </div>
            </div>
          </template>
          <div class="p-10">
            <div class="text-center mb-8">
              <div class="relative inline-block">
                <div class="w-48 h-48 rounded-full mb-8 border-4 border-indigo-500 mx-auto shadow-elegant-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="@/assets/logo.webp" 
                    alt="Logo de la empresa" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <p class="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                En RexDevelop, nos especializamos en ofrecer soluciones de software innovadoras y personalizadas.
                Con un enfoque en la excelencia técnica y la satisfacción del cliente, transformamos ideas en realidades digitales.
              </p>
            </div>
          </div>
        </AccordionTab>
        
        <AccordionTab>
          <template #header>
            <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-t-xl">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <i class="pi pi-eye text-3xl text-white"></i>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-cyan-600">Misión y Visión</h3>
                <p class="text-sm text-cyan-500 mt-1">Nuestro propósito</p>
              </div>
            </div>
          </template>
          <div class="p-10">
            <div class="grid md:grid-cols-2 gap-10">
              <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-elegant border border-indigo-200">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                    <i class="pi pi-bullseye text-2xl text-white"></i>
                  </div>
                  <h2 class="text-2xl md:text-3xl font-bold text-indigo-600">Misión</h2>
                </div>
                <p class="text-lg md:text-xl leading-relaxed text-gray-700">
                  Proveer soluciones de software que impulsen el éxito de nuestros clientes.
                </p>
              </div>
              <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl shadow-elegant border border-cyan-200">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                    <i class="pi pi-compass text-2xl text-white"></i>
                  </div>
                  <h2 class="text-2xl md:text-3xl font-bold text-cyan-600">Visión</h2>
                </div>
                <p class="text-lg md:text-xl leading-relaxed text-gray-700">
                  Ser reconocidos como líderes en desarrollo de software por nuestra calidad y compromiso.
                </p>
              </div>
            </div>
          </div>
        </AccordionTab>
        
        <AccordionTab>
          <template #header>
            <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-t-xl">
              <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <i class="pi pi-heart text-3xl text-white"></i>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-pink-600">Valores</h3>
                <p class="text-sm text-pink-500 mt-1">Lo que nos define</p>
              </div>
            </div>
          </template>
          <div class="p-10">
            <div class="grid md:grid-cols-2 gap-8">
              <div 
                v-for="(value, index) in values" 
                :key="value.name"
                class="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal border border-gray-100"
                :style="{ animationDelay: `${index * 0.15}s` }"
              >
                <div class="flex items-center gap-4 mb-4">
                  <div :class="[
                    'w-16 h-16 rounded-xl flex items-center justify-center shadow-md',
                    value.color === 'text-indigo-500' ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
                    value.color === 'text-pink-500' ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                    value.color === 'text-green-500' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    'bg-gradient-to-br from-blue-500 to-blue-600'
                  ]">
                    <i :class="[value.icon, 'text-3xl text-white']"></i>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-gray-800">{{ value.name }}</h3>
                </div>
                <p class="text-gray-600 leading-relaxed text-lg">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </AccordionTab>
        
        <AccordionTab>
          <template #header>
            <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-xl">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <i class="pi pi-star text-3xl text-white"></i>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-yellow-600">Experiencia</h3>
                <p class="text-sm text-yellow-500 mt-1">Nuestro recorrido</p>
              </div>
            </div>
          </template>
          <div class="p-10">
            <div class="text-center">
              <div class="inline-block bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-3xl shadow-elegant-lg max-w-3xl border border-yellow-200">
                <div class="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i class="pi pi-trophy text-5xl text-white"></i>
                </div>
                <p class="text-xl md:text-2xl leading-relaxed text-gray-700">
                  Con años de experiencia y un enfoque en tecnologías de vanguardia,
                  estamos preparados para llevar tus proyectos al siguiente nivel.
                </p>
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const values = [
  {
    name: 'Innovación',
    icon: 'pi pi-star-fill',
    color: 'text-indigo-500',
    description: 'Buscamos constantemente nuevas tecnologías y metodologías para ofrecer las mejores soluciones.'
  },
  {
    name: 'Compromiso',
    icon: 'pi pi-heart-fill',
    color: 'text-pink-500',
    description: 'Nos comprometemos con el éxito de nuestros clientes, trabajando con dedicación y pasión.'
  },
  {
    name: 'Calidad',
    icon: 'pi pi-check-circle-fill',
    color: 'text-green-500',
    description: 'Mantenemos los más altos estándares de calidad en cada proyecto que desarrollamos.'
  },
  {
    name: 'Integridad',
    icon: 'pi pi-shield-fill',
    color: 'text-blue-500',
    description: 'Actuamos con honestidad, transparencia y ética en todas nuestras relaciones comerciales.'
  }
];

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

  document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
