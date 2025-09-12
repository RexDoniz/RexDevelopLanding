<template>
  <div id="home" class="flex flex-col items-center w-full">
    <!-- Hero Section -->
    <section class="w-full max-w-6xl mt-4 relative overflow-hidden rounded-lg p-8 bg-gray-100" aria-labelledby="site-title">
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h1 id="site-title" class="text-4xl font-bold text-indigo-600">RexDevelop</h1>
        <p class="text-xl text-cyan-600 mt-4">Innovación en Desarrollo, Marketing y Contabilidad para tu empresa.</p>
        <p class="text-lg text-gray-600 mt-2">Atendemos Loma Dorada (Tonalá, Jalisco) y Guadalajara.</p>
        <div class="flex justify-center gap-4 mt-8">
          <RouterLink to="/contact" aria-label="Contáctanos">
            <Button label="Contáctanos" icon="pi pi-send" severity="primary" rounded />
          </RouterLink>
          <RouterLink to="/services" aria-label="Ver nuestros servicios">
            <Button label="Nuestros Servicios" icon="pi pi-briefcase" severity="secondary" rounded outlined />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section class="w-full max-w-6xl py-16" aria-labelledby="services-title">
      <h2 id="services-title" class="text-3xl font-bold text-indigo-600 text-center mb-8">¿Qué hacemos?</h2>
      <div class="flex justify-center gap-8 flex-wrap">
        <Card v-for="service in serviceData" :key="service.title" class="w-80 text-center bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <template #header>
            <div class="text-5xl pt-6 mb-4" :style="{ color: service.color }">
              <i :class="service.icon"></i>
            </div>
          </template>
          <template #title>
            <h3 class="text-xl font-bold text-indigo-600">{{ service.title }}</h3>
          </template>
          <template #content>
            <p class="text-base text-cyan-600">{{ service.desc }}</p>
          </template>
          <template #footer>
            <RouterLink :to="service.link" aria-label="Ver más sobre {{ service.title }}" class="no-underline">
              <Button label="Ver más" icon="pi pi-arrow-right" text />
            </RouterLink>
          </template>
        </Card>
      </div>
    </section>

    <!-- About -->
    <section class="w-full max-w-6xl py-16" aria-labelledby="about-title">
      <h2 id="about-title" class="text-3xl font-bold text-indigo-600 text-center mb-4">¿Quiénes somos?</h2>
      <p class="max-w-3xl mx-auto text-center text-cyan-600 text-lg mb-8">
        Un equipo multidisciplinario que combina tecnología, creatividad y experiencia para impulsar tu negocio. Conoce nuestra esencia y por qué podemos ser tu mejor socio digital.
      </p>
      <div class="flex flex-col items-center text-left p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div class="w-full flex justify-center items-center p-8 mb-8 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-t-lg">
          <i class="fas fa-users text-6xl text-indigo-600" aria-label="Equipo RexDevelop"></i>
        </div>
        <div class="w-full">
          <h3 class="text-2xl font-bold text-indigo-600 mb-4">Sobre Nosotros</h3>
          <p class="text-lg text-cyan-600 mb-6">
            RexDevelop está formado por especialistas en desarrollo de software, marketing digital y contabilidad. Nuestra pasión es encontrar soluciones personalizadas y eficaces para cada cliente, manteniéndonos siempre a la vanguardia de las tendencias tecnológicas.
          </p>
          <div class="flex flex-col gap-8 my-8">
            <div class="flex gap-6 items-start bg-gray-50 p-6 rounded-lg shadow-sm" v-for="detail in aboutServices" :key="detail.title">
              <i :class="detail.icon + ' text-4xl text-indigo-600 shrink-0'"></i>
              <div>
                <h4 class="text-xl font-bold text-pink-500 mb-2">{{ detail.title }}</h4>
                <p class="text-lg text-cyan-600">{{ detail.desc }}</p>
              </div>
            </div>
          </div>
          <p class="text-lg text-cyan-600 mb-6">
            Además, creemos en la formación continua y el aprendizaje colaborativo, asegurando que nuestros servicios evolucionen junto a las necesidades del mercado.
          </p>
          <RouterLink to="/about" aria-label="Saber más sobre nosotros">
            <Button label="Conoce más sobre nosotros" icon="pi pi-info-circle" severity="help" rounded />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQ SEO -->
    <section class="w-full max-w-6xl py-16" aria-labelledby="faq-seo-title">
      <h2 id="faq-seo-title" class="text-3xl font-bold text-indigo-600 text-center mb-8">SEO: ¿Qué búsquedas favorecen el resultado?</h2>
      <div class="p-8 bg-white rounded-lg shadow-md" role="list">
        <article role="listitem">
          <h3 class="flex items-center gap-2 text-xl font-bold text-indigo-600 mb-4"><i class="fas fa-magnifying-glass-chart"></i> Según el SEO, ¿qué tipo de búsquedas favorecerán al resultado?</h3>
          <div class="text-left">
            <ul class="list-disc pl-6 mb-4">
              <li class="mb-2"><strong>Consultas de intención clara</strong>: transaccionales ("contratar desarrollo web"), locales ("agencia marketing en Tonalá", "contabilidad en Guadalajara"), y navegacionales (marca: "RexDevelop").</li>
              <li class="mb-2"><strong>Palabras clave long-tail</strong>: más específicas y con menor competencia ("desarrollo de software a medida en Jalisco").</li>
              <li class="mb-2"><strong>Consultas problema-solución</strong>: formuladas como necesidad ("cómo facturar electrónicamente", "mejorar posicionamiento SEO local").</li>
              <li class="mb-2"><strong>Comparativas y de valor</strong>: ("mejor agencia de marketing digital en GDL", "desarrollo vs. plantilla para e‑commerce").</li>
              <li class="mb-2"><strong>Consultas con modificadores</strong>: "cerca de mí", por colonia o municipio ("Loma Dorada Tonalá"), por sector ("para restaurantes", "para pymes").</li>
            </ul>
            <p class="text-base text-gray-600">Para potenciar estas búsquedas: optimiza títulos y descripciones, crea páginas/sections específicas por servicio y ubicación, añade datos estructurados (FAQ, LocalBusiness) y reseñas.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact Call -->
    <section class="w-full text-center py-16 relative overflow-hidden rounded-lg bg-gray-100" aria-labelledby="contact-title">
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 id="contact-title" class="text-3xl font-bold text-pink-500 mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <p class="text-xl text-cyan-600 mb-8">Te ayudamos a digitalizar tu empresa y hacerla crecer. Cuéntanos tu proyecto, te responderemos en menos de 24 horas.</p>
        <RouterLink to="/contact" aria-label="Contactar a RexDevelop">
          <Button label="Contáctanos ahora" icon="pi pi-comments" severity="success" rounded />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import Card from 'primevue/card';

const serviceData = [
  {
    title: 'Desarrollo y TI',
    desc: 'Soluciones integrales: desarrollo de software a medida, administración de servidores y soporte técnico especializado.',
    icon: 'fas fa-laptop-code',
    color: 'var(--color-primary)',
    link: { path: '/services', hash: '#development' }
  },
  {
    title: 'Contabilidad',
    desc: 'Gestión fiscal, declaraciones, facturación electrónica y servicios contables para empresas modernas.',
    icon: 'fas fa-calculator',
    color: 'var(--color-accent)',
    link: { path: '/services', hash: '#accounting' }
  },
  {
    title: 'Marketing Digital',
    desc: 'Estrategias de visibilidad, campañas en redes, contenido, SEO, y producción audiovisual para destacar tu marca.',
    icon: 'fas fa-bullhorn',
    color: 'var(--color-secondary)',
    link: { path: '/services', hash: '#marketing' }
  }
];

const aboutServices = [
  {
    title: 'Desarrollo de Software',
    desc: 'Creamos soluciones digitales robustas, seguras y personalizadas, acompañándote en cada paso del proceso tecnológico.',
    icon: 'fas fa-laptop-code'
  },
  {
    title: 'Marketing Digital',
    desc: 'Diseñamos campañas estratégicas y contenidos que posicionan tu marca y generan resultados reales.',
    icon: 'fas fa-bullhorn'
  },
  {
    title: 'Contabilidad',
    desc: 'Brindamos asesoría contable integral y gestión fiscal, garantizando cumplimiento y optimización de recursos.',
    icon: 'fas fa-calculator'
  }
];

let observer: IntersectionObserver | null = null;

onMounted(async () => {
  await nextTick();
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If user prefers reduced motion, reveal everything immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        if (observer) observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
