<template>
  <div class="flex justify-center items-start py-16 px-4 min-h-[80vh]">
    <div class="w-full max-w-3xl">
      <Accordion :active-index="0">
        <AccordionTab header="Sobre RexDevelop">
          <div class="p-6 text-center">
            <img src="@/assets/logo.webp" alt="Logo de la empresa" class="w-32 h-32 rounded-full mb-6 border-4 border-indigo-500 mx-auto">
            <p class="text-lg leading-relaxed text-gray-700">
              En RexDevelop, nos especializamos en ofrecer soluciones de software innovadoras y personalizadas.
              Con un enfoque en la excelencia técnica y la satisfacción del cliente, transformamos ideas en realidades digitales.
            </p>
          </div>
        </AccordionTab>
        <AccordionTab header="Misión y Visión">
          <div class="p-6 text-center">
            <h2 class="text-2xl font-bold mb-2 text-indigo-600">Misión</h2>
            <p class="text-lg leading-relaxed text-gray-700">Proveer soluciones de software que impulsen el éxito de nuestros clientes.</p>
            <h2 class="text-2xl font-bold mt-6 mb-2 text-indigo-600">Visión</h2>
            <p class="text-lg leading-relaxed text-gray-700">Ser reconocidos como líderes en desarrollo de software por nuestra calidad y compromiso.</p>
          </div>
        </AccordionTab>
        <AccordionTab header="Valores">
          <div class="p-6 text-center">
            <ul class="list-none p-0 m-0 flex flex-wrap justify-center gap-8">
              <li class="text-xl flex items-center gap-2 text-gray-800"><i class="pi pi-star-fill text-indigo-500"></i> Innovación</li>
              <li class="text-xl flex items-center gap-2 text-gray-800"><i class="pi pi-heart-fill text-indigo-500"></i> Compromiso</li>
              <li class="text-xl flex items-center gap-2 text-gray-800"><i class="pi pi-check-circle-fill text-indigo-500"></i> Calidad</li>
              <li class="text-xl flex items-center gap-2 text-gray-800"><i class="pi pi-shield-fill text-indigo-500"></i> Integridad</li>
            </ul>
          </div>
        </AccordionTab>
        <AccordionTab header="Experiencia">
          <div class="p-6 text-center">
            <p class="text-lg leading-relaxed text-gray-700">
              Con años de experiencia y un enfoque en tecnologías de vanguardia,
              estamos preparados para llevar tus proyectos al siguiente nivel.
            </p>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>
