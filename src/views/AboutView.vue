<template>
  <div class="about-page">
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion('about')">
          <h2>Sobre RexDevelop</h2>
        </div>
        <div v-show="activeSection === 'about'" class="accordion-content">
          <img src="@/assets/logo.webp" alt="Logo de la empresa" class="avatar">
          <p>
            En RexDevelop, nos especializamos en ofrecer soluciones de software innovadoras y personalizadas.
            Con un enfoque en la excelencia técnica y la satisfacción del cliente, transformamos ideas en realidades digitales.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion('mission')">
          <h2>Misión</h2>
        </div>
        <div v-show="activeSection === 'mission'" class="accordion-content">
          <p>Proveer soluciones de software que impulsen el éxito de nuestros clientes.</p>
          <h2>Visión</h2>
          <p>Ser reconocidos como líderes en desarrollo de software por nuestra calidad y compromiso.</p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion('values')">
          <h2>Valores</h2>
        </div>
        <div v-show="activeSection === 'values'" class="accordion-content">
          <ul class="values-list">
            <li>Innovación</li>
            <li>Compromiso</li>
            <li>Calidad</li>
            <li>Integridad</li>
          </ul>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion('experience')">
          <h2>Experiencia</h2>
        </div>
        <div v-show="activeSection === 'experience'" class="accordion-content">
          <p>
            Con años de experiencia y un enfoque en tecnologías de vanguardia,
            estamos preparados para llevar tus proyectos al siguiente nivel.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeSection = ref<'about' | 'mission' | 'values' | 'experience' | null>('about');

function toggleAccordion(section: 'about' | 'mission' | 'values' | 'experience') {
  activeSection.value = activeSection.value === section ? null : section;
}

</script>

<style scoped>
@import '../assets/variables.css';

.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: none;
}

.accordion {
  width: 100%;
  max-width: 600px;
}

.accordion-item {
  margin-bottom: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
}

.accordion-header {
  padding: 1rem;
  background-color: var(--color-primary);
  color: #fff;
  cursor: pointer;
}

.accordion-content {
  background-color: var(--color-background);
  padding: 1rem;
  border-top: 1px solid var(--color-primary);
}

.about-card h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.about-card p {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
}

.values-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.values-list li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
}
</style>
