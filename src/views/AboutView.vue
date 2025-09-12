<template>
  <div class="about-page">
    <div class="accordion-container">
      <Accordion :active-index="0">
        <AccordionTab header="Sobre RexDevelop">
          <div class="accordion-content">
            <img src="@/assets/logo.webp" alt="Logo de la empresa" class="avatar">
            <p>
              En RexDevelop, nos especializamos en ofrecer soluciones de software innovadoras y personalizadas.
              Con un enfoque en la excelencia técnica y la satisfacción del cliente, transformamos ideas en realidades digitales.
            </p>
          </div>
        </AccordionTab>
        <AccordionTab header="Misión y Visión">
          <div class="accordion-content">
            <h2>Misión</h2>
            <p>Proveer soluciones de software que impulsen el éxito de nuestros clientes.</p>
            <h2>Visión</h2>
            <p>Ser reconocidos como líderes en desarrollo de software por nuestra calidad y compromiso.</p>
          </div>
        </AccordionTab>
        <AccordionTab header="Valores">
          <div class="accordion-content">
            <ul class="values-list">
              <li><i class="pi pi-star-fill"></i> Innovación</li>
              <li><i class="pi pi-heart-fill"></i> Compromiso</li>
              <li><i class="pi pi-check-circle-fill"></i> Calidad</li>
              <li><i class="pi pi-shield-fill"></i> Integridad</li>
            </ul>
          </div>
        </AccordionTab>
        <AccordionTab header="Experiencia">
          <div class="accordion-content">
            <p>
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

<style scoped>
@import '../assets/variables.css';

.about-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
  background: none;
  min-height: 80vh;
}

.accordion-container {
  width: 100%;
  max-width: 800px;
}

.accordion-content {
  padding: 1.5rem;
  text-align: center;
}

.accordion-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.accordion-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text);
}

.values-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.values-list li {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-detail);
}

.values-list i {
  color: var(--color-primary);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid var(--color-primary);
}
</style>
