<template>
  <div class="py-24 px-4 md:px-8 text-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20 reveal">
        <h2 class="text-5xl md:text-6xl font-bold gradient-text mb-6">Nuestros Servicios</h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Soluciones integrales diseñadas para impulsar tu negocio. 
          Desde desarrollo tecnológico hasta gestión contable y estrategias de marketing digital.
        </p>
      </div>

      <div class="flex flex-col gap-16 max-w-7xl mx-auto">
      <!-- Desarrollo | TI -->
      <Panel 
        header="Desarrollo | TI" 
        :toggleable="true"
        class="reveal shadow-elegant rounded-2xl overflow-hidden bg-white"
      >
        <template #header>
          <div class="flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <i class="fas fa-laptop-code text-3xl text-white"></i>
            </div>
            <div class="text-left">
              <h3 class="text-2xl md:text-3xl font-bold text-indigo-600">Desarrollo y TI</h3>
              <p class="text-sm text-indigo-500 mt-1">Soluciones tecnológicas a medida</p>
            </div>
          </div>
        </template>
        <div class="p-8">
          <p class="mb-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Transformamos tus ideas en soluciones tecnológicas robustas. Ofrecemos servicios completos 
            de desarrollo de software, infraestructura y soporte técnico para que tu empresa opere con 
            la máxima eficiencia y seguridad.
          </p>
          <div class="grid md:grid-cols-3 gap-8 mb-10">
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-wrench text-2xl text-indigo-600"></i>
                </div>
                <span class="text-xl font-bold text-indigo-600">Soporte y Mantenimiento</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Soporte Contpaqi:</strong> Instalación, migración y resolución de incidencias.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Soporte TI Remoto:</strong> Configuración, respaldos y mantenimiento a distancia.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Soporte TI Físico:</strong> Mantenimiento de hardware en sitio.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Formateo de Sistemas:</strong> Con opción de recogida y entrega.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Instalación de Software:</strong> Optimizando tus herramientas de trabajo.</span>
                </li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-code text-2xl text-indigo-600"></i>
                </div>
                <span class="text-xl font-bold text-indigo-600">Desarrollo de Software</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Software a Medida:</strong> Proyectos evaluados según tus requisitos específicos.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Aplicaciones Web:</strong> Modernas, responsivas y optimizadas.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Aplicaciones Móviles:</strong> Para iOS y Android nativas.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>APIs:</strong> Robustas, seguras y escalables.</span>
                </li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-server text-2xl text-indigo-600"></i>
                </div>
                <span class="text-xl font-bold text-indigo-600">Infraestructura y Consultoría</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Mantenimiento:</strong> Monitoreo continuo de redes y servidores.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Soporte Técnico:</strong> En sitio o remoto, disponible 24/7.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Consultoría:</strong> Soluciones estratégicas personalizadas.</span>
                </li>
              </ul>
            </template>
          </Card>
          </div>
          <div class="mt-12 text-center">
            <a 
              href="https://wa.me/523325557689" 
              target="_blank" 
              class="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              <i class="fab fa-whatsapp text-2xl"></i>
              <span>Contacta a un experto en Desarrollo y TI</span>
            </a>
          </div>
        </div>
      </Panel>

      <!-- Contabilidad -->
      <Panel 
        header="Contabilidad" 
        :toggleable="true" 
        :collapsed="true"
        class="reveal shadow-elegant rounded-2xl overflow-hidden bg-white"
        style="animation-delay: 0.1s"
      >
        <template #header>
          <div class="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-50 to-cyan-100">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <i class="fas fa-calculator text-3xl text-white"></i>
            </div>
            <div class="text-left">
              <h3 class="text-2xl md:text-3xl font-bold text-cyan-600">Contabilidad</h3>
              <p class="text-sm text-cyan-500 mt-1">Gestión fiscal y administrativa integral</p>
            </div>
          </div>
        </template>
        <div class="p-8">
          <p class="mb-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Garantizamos el cumplimiento de todas tus obligaciones fiscales, laborales y administrativas. 
            Nuestro equipo de contadores certificados se encarga de cada detalle para que puedas 
            concentrarte completamente en hacer crecer tu negocio.
          </p>
          <div class="grid md:grid-cols-3 gap-8 mb-10">
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-file text-2xl text-cyan-600"></i>
                </div>
                <span class="text-xl font-bold text-cyan-600">Gestión Fiscal</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Declaraciones Mensuales:</strong> Presentación puntual y correcta.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Paquetes Mensuales:</strong> Contabilidad completa mensual.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Consultoría Fiscal:</strong> Asesoría especializada.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>DIOTS:</strong> Elaboración y presentación.</span>
                </li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-briefcase text-2xl text-cyan-600"></i>
                </div>
                <span class="text-xl font-bold text-cyan-600">Trámites y Gestiones</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Constancias:</strong> Situación Fiscal y otros documentos.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Inscripción RFC:</strong> Gestión de citas y trámites.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Actualizaciones:</strong> Domicilio y Régimen Fiscal.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>IMSS:</strong> Altas de trabajadores y gestiones.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Renovaciones:</strong> Sellos y CIECF.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Firma Electrónica:</strong> Gestión de citas y trámites.</span>
                </li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
            <template #title>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i class="pi pi-users text-2xl text-cyan-600"></i>
                </div>
                <span class="text-xl font-bold text-cyan-600">Nómina y Cumplimiento</span>
              </div>
            </template>
            <template #content>
              <ul class="list-none space-y-4 text-left">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Nómina:</strong> Elaboración completa y puntual.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Opiniones de Cumplimiento:</strong> SAT, IMSS e INFONAVIT.</span>
                </li>
              </ul>
            </template>
          </Card>
          </div>
          <div class="mt-12 text-center">
            <a 
              href="https://wa.me/523311957142" 
              target="_blank" 
              class="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              <i class="fab fa-whatsapp text-2xl"></i>
              <span>Contacta a un experto en Contabilidad</span>
            </a>
          </div>
        </div>
      </Panel>

      <!-- Marketing Digital -->
      <Panel 
        header="Marketing Digital" 
        :toggleable="true" 
        :collapsed="true"
        class="reveal shadow-elegant rounded-2xl overflow-hidden bg-white"
        style="animation-delay: 0.2s"
      >
        <template #header>
          <div class="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-50 to-pink-100">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <i class="fas fa-bullhorn text-3xl text-white"></i>
            </div>
            <div class="text-left">
              <h3 class="text-2xl md:text-3xl font-bold text-pink-600">Marketing Digital</h3>
              <p class="text-sm text-pink-500 mt-1">Estrategias que impulsan tu marca</p>
            </div>
          </div>
        </template>
        <div class="p-8">
          <p class="mb-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Potenciamos tu presencia digital con estrategias efectivas y medibles. Nos encargamos de todo 
            el proceso: desde la creación de contenido atractivo hasta la ejecución de campañas publicitarias 
            en redes sociales que generan resultados reales.
          </p>
          <div class="grid md:grid-cols-2 gap-8 mb-10">
            <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
              <template #title>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <i class="pi pi-image text-2xl text-pink-600"></i>
                  </div>
                  <span class="text-xl font-bold text-pink-600">Contenido y Redes Sociales</span>
                </div>
              </template>
              <template #content>
                <ul class="list-none space-y-4 text-left">
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>Creación de Contenido:</strong> Diseño gráfico, videos y copywriting.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>Gestión de Redes:</strong> Community management profesional.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>Publicidad:</strong> Campañas en Facebook, Instagram y más.</span>
                  </li>
                </ul>
              </template>
            </Card>
            <Card class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal-scale border border-gray-100">
              <template #title>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <i class="pi pi-chart-line text-2xl text-pink-600"></i>
                  </div>
                  <span class="text-xl font-bold text-pink-600">Posicionamiento y Estrategia</span>
                </div>
              </template>
              <template #content>
                <ul class="list-none space-y-4 text-left">
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>SEO y SEM:</strong> Optimización y publicidad en buscadores.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>Email Marketing:</strong> Campañas segmentadas y automatizadas.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="pi pi-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span class="text-gray-700 leading-relaxed"><strong>Análisis y ROI:</strong> Reportes detallados de resultados.</span>
                  </li>
                </ul>
              </template>
            </Card>
          </div>
          <div class="mt-12 text-center">
            <a 
              href="https://wa.me/523337238928" 
              target="_blank" 
              class="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              <i class="fab fa-whatsapp text-2xl"></i>
              <span>Contacta a un experto en Marketing Digital</span>
            </a>
          </div>
        </div>
      </Panel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import Panel from 'primevue/panel';
import Card from 'primevue/card';

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
