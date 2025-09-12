<template>
  <div class="py-16 px-4 text-center">
    <h2 class="text-3xl font-bold text-indigo-600 mb-4">Nuestros Servicios</h2>
    <p class="text-lg text-cyan-600 mb-12 max-w-3xl mx-auto">Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades en Desarrollo, Contabilidad y Marketing Digital.</p>

    <div class="flex flex-col gap-8 max-w-5xl mx-auto">
      <!-- Desarrollo | TI -->
      <Panel header="Desarrollo | TI" :toggleable="true">
        <p class="my-4 text-lg text-gray-700">
          En RexDevelop, ofrecemos servicios completos de desarrollo y TI para asegurar que tu empresa tenga las herramientas tecnológicas necesarias para crecer y prosperar.
          Nos encargamos de todo, desde la creación de software a medida hasta el mantenimiento y soporte técnico de tus infraestructuras.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Soporte y Mantenimiento</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Soporte Contpaqi: Instalación, migración y resolución de incidencias.</li>
                <li>Soporte TI Remoto: Configuración, respaldos y mantenimiento a distancia.</li>
                <li>Soporte TI Físico: Mantenimiento de hardware.</li>
                <li>Formateo de Sistemas: Con opción de recogida y entrega.</li>
                <li>Instalación de Software: Optimizando tus herramientas de trabajo.</li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Desarrollo de Software</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Desarrollo de Software a Medida: Proyectos evaluados según tus requisitos.</li>
                <li>Desarrollo de Aplicaciones Web: Modernas y responsivas.</li>
                <li>Desarrollo de Aplicaciones Móviles: Para iOS y Android.</li>
                <li>Desarrollo de APIs: Robustas y seguras.</li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Infraestructura y Consultoría</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Mantenimiento de Infraestructura: Monitoreo de redes y servidores.</li>
                <li>Soporte Técnico: En sitio o remoto.</li>
                <li>Consultoría en TI: Soluciones estratégicas para tu empresa.</li>
              </ul>
            </template>
          </Card>
        </div>
        <div class="mt-8">
          <a href="https://wa.me/523325557689" target="_blank" class="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
            <i class="fab fa-whatsapp text-xl"></i>
            <span>Contacta a un experto en Desarrollo y TI</span>
          </a>
        </div>
      </Panel>

      <!-- Contabilidad -->
      <Panel header="Contabilidad" :toggleable="true" :collapsed="true">
        <p class="my-4 text-lg text-gray-700">
          Ofrecemos servicios contables completos para asegurar que tu empresa cumpla con todas sus obligaciones fiscales, laborales y administrativas.
          Nuestro equipo de expertos se encarga de cada detalle para que puedas concentrarte en crecer tu negocio.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Gestión Fiscal</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Declaraciones Mensuales.</li>
                <li>Paquetes de Contabilidad Mensual.</li>
                <li>Consultoría Fiscal.</li>
                <li>Elaboración de DIOTS.</li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Trámites y Gestiones</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Constancias de Situación Fiscal.</li>
                <li>Citas para Inscripción al RFC.</li>
                <li>Actualización de Domicilio y Régimen Fiscal.</li>
                <li>Altas de Trabajadores en IMSS.</li>
                <li>Renovación de Sellos y CIECF.</li>
                <li>Citas para Firma Electrónica.</li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Nómina y Cumplimiento</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Elaboración de Nómina.</li>
                <li>Opinión de Cumplimiento SAT, IMSS, INFONAVIT.</li>
              </ul>
            </template>
          </Card>
        </div>
        <div class="mt-8">
          <a href="https://wa.me/523311957142" target="_blank" class="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
            <i class="fab fa-whatsapp text-xl"></i>
            <span>Contacta a un experto en Contabilidad</span>
          </a>
        </div>
      </Panel>

      <!-- Marketing Digital -->
      <Panel header="Marketing Digital" :toggleable="true" :collapsed="true">
        <p class="my-4 text-lg text-gray-700">
          Impulsamos tu marca en el entorno digital con estrategias efectivas.
          Nos encargamos de todo, desde la creación de contenido hasta la ejecución de campañas en redes sociales.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Contenido y Redes Sociales</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>Creación de Contenido.</li>
                <li>Gestión de Redes Sociales.</li>
                <li>Publicidad en Redes Sociales.</li>
              </ul>
            </template>
          </Card>
          <Card class="bg-white rounded-lg shadow-md">
            <template #title><span class="font-bold text-indigo-600">Posicionamiento y Estrategia</span></template>
            <template #content>
              <ul class="list-disc list-inside text-left">
                <li>SEO y SEM.</li>
                <li>Email Marketing.</li>
                <li>Análisis de Datos y ROI.</li>
              </ul>
            </template>
          </Card>
        </div>
        <div class="mt-8">
          <a href="https://wa.me/523337238928" target="_blank" class="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
            <i class="fab fa-whatsapp text-xl"></i>
            <span>Contacta a un experto en Marketing Digital</span>
          </a>
        </div>
      </Panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import Panel from 'primevue/panel';
import Card from 'primevue/card';
</script>
