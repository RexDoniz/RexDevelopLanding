<template>
  <div id="home" class="flex flex-col items-center w-full pt-24 bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section Mejorado -->
    <section 
      class="w-full max-w-7xl mt-8 relative overflow-hidden rounded-3xl p-12 md:p-20 gradient-hero text-white shadow-elegant-lg"
      aria-labelledby="site-title"
    >
      <div class="absolute inset-0 gradient-overlay"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto text-center reveal">
        <h1 id="site-title" class="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp text-white drop-shadow-lg">
          RexDevelop
        </h1>
        <p class="text-xl md:text-2xl text-white/95 mb-4 font-light animate-fadeInUp" style="animation-delay: 0.2s">
          Innovación en Desarrollo, Marketing y Contabilidad para tu empresa
        </p>
        <p class="text-lg text-white/85 mb-8 animate-fadeInUp" style="animation-delay: 0.4s">
          <i class="pi pi-map-marker mr-2"></i>
          Atendemos Loma Dorada (Tonalá, Jalisco) y Guadalajara
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fadeInUp" style="animation-delay: 0.6s">
          <RouterLink to="/contact" aria-label="Contáctanos" class="hover-lift">
            <Button 
              label="Contáctanos" 
              icon="pi pi-send" 
              severity="success" 
              rounded 
              size="large"
              class="px-8 py-3 text-lg shadow-lg"
            />
          </RouterLink>
          <RouterLink to="/services" aria-label="Ver nuestros servicios" class="hover-lift">
            <Button 
              label="Nuestros Servicios" 
              icon="pi pi-briefcase" 
              severity="secondary" 
              rounded 
              outlined
              size="large"
              class="px-8 py-3 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg"
            />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Servicios Mejorados -->
    <section class="w-full max-w-7xl py-24 px-4 md:px-8" aria-labelledby="services-title">
      <div class="text-center mb-16 reveal">
        <h2 id="services-title" class="text-5xl md:text-6xl font-bold gradient-text mb-6">
          ¿Qué hacemos?
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Soluciones integrales diseñadas para impulsar tu negocio en el mundo digital
        </p>
      </div>
      
      <div class="flex justify-center gap-8 flex-wrap">
        <Card 
          v-for="(service, index) in serviceData" 
          :key="service.title" 
          class="w-full sm:w-96 text-center bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-3 transition-all duration-500 reveal hover-lift border border-gray-100"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <template #header>
            <div class="p-10 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-t-2xl relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/10 to-indigo-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div class="text-7xl mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110" :style="{ color: service.color }">
                <i :class="service.icon"></i>
              </div>
            </div>
          </template>
          <template #title>
            <h3 class="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 px-4">{{ service.title }}</h3>
          </template>
          <template #content>
            <p class="text-lg text-gray-600 leading-relaxed px-4 pb-4">{{ service.desc }}</p>
          </template>
          <template #footer>
            <div class="p-4">
              <RouterLink :to="service.link" class="no-underline">
                <Button 
                  label="Ver más" 
                  icon="pi pi-arrow-right" 
                  text 
                  class="text-indigo-600 hover:text-indigo-800 font-semibold"
                />
              </RouterLink>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <!-- About Mejorado -->
    <section class="w-full max-w-7xl py-24 px-4 md:px-8" aria-labelledby="about-title">
      <div class="text-center mb-16 reveal">
        <h2 id="about-title" class="text-5xl md:text-6xl font-bold gradient-text mb-6">
          ¿Quiénes somos?
        </h2>
        <p class="max-w-4xl mx-auto text-center text-gray-600 text-xl md:text-2xl leading-relaxed">
          Un equipo multidisciplinario que combina tecnología, creatividad y experiencia 
          para impulsar tu negocio hacia el éxito
        </p>
      </div>
      
      <div class="flex flex-col items-center text-left p-8 md:p-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-elegant-lg reveal border border-gray-100">
        <div class="w-full flex justify-center items-center p-10 mb-10 bg-gradient-to-r from-indigo-100 via-pink-100 to-cyan-100 rounded-2xl">
          <div class="relative">
            <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <i class="fas fa-users text-5xl text-white" aria-label="Equipo RexDevelop"></i>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full animate-pulse shadow-md"></div>
          </div>
        </div>
        
        <div class="w-full">
          <h3 class="text-3xl md:text-4xl font-bold text-indigo-600 mb-8">Sobre Nosotros</h3>
          <p class="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            RexDevelop está formado por especialistas en desarrollo de software, marketing digital 
            y contabilidad. Nuestra pasión es encontrar soluciones personalizadas y eficaces para 
            cada cliente, manteniéndonos siempre a la vanguardia de las tendencias tecnológicas.
          </p>
          
          <div class="grid md:grid-cols-3 gap-8 my-12">
            <div 
              v-for="(detail, index) in aboutServices" 
              :key="detail.title"
              class="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift reveal border border-gray-100"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <i :class="[detail.icon, 'text-3xl text-white']"></i>
              </div>
              <h4 class="text-xl md:text-2xl font-bold text-pink-500 mb-3">{{ detail.title }}</h4>
              <p class="text-base md:text-lg text-gray-600 leading-relaxed">{{ detail.desc }}</p>
            </div>
          </div>
          
          <p class="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Además, creemos en la formación continua y el aprendizaje colaborativo, asegurando que 
            nuestros servicios evolucionen junto a las necesidades del mercado.
          </p>
          
          <div class="text-center">
            <RouterLink to="/about" aria-label="Saber más sobre nosotros" class="hover-lift inline-block">
              <Button 
                label="Conoce más sobre nosotros" 
                icon="pi pi-info-circle" 
                severity="help" 
                rounded 
                size="large"
                class="px-10 py-4 text-lg"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios (Nueva Sección) -->
    <section class="w-full max-w-7xl py-24 px-4 md:px-8 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl my-12">
      <div class="text-center mb-16 reveal">
        <h2 class="text-5xl md:text-6xl font-bold gradient-text mb-6">Lo que dicen nuestros clientes</h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Testimonios reales de empresas que confían en nosotros</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <Card 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.name"
          class="bg-white rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 reveal hover-lift border border-gray-100"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <template #content>
            <div class="p-6">
              <div class="flex items-center gap-1 mb-6">
                <i class="pi pi-star-fill text-yellow-400 text-xl" v-for="n in 5" :key="n"></i>
              </div>
              <p class="text-gray-700 mb-8 italic leading-relaxed text-lg">"{{ testimonial.text }}"</p>
              <div class="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div class="w-14 h-14 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform duration-300 hover:scale-110">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-lg">{{ testimonial.name }}</p>
                  <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <!-- Contact Call Mejorado -->
    <section 
      class="w-full max-w-7xl mx-auto text-center py-24 px-4 md:px-8 relative overflow-hidden rounded-3xl gradient-primary text-white my-12 shadow-elegant-lg"
      aria-labelledby="contact-title"
    >
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-5xl mx-auto reveal">
        <h2 id="contact-title" class="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p class="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto">
          Te ayudamos a digitalizar tu empresa y hacerla crecer. 
          Cuéntanos tu proyecto, te responderemos en menos de 24 horas.
        </p>
        <RouterLink to="/contact" aria-label="Contactar a RexDevelop" class="hover-lift inline-block">
          <Button 
            label="Contáctanos ahora" 
            icon="pi pi-comments" 
            severity="success" 
            rounded 
            size="large"
            class="px-12 py-5 text-xl bg-white text-indigo-600 hover:bg-gray-100 shadow-lg font-bold"
          />
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
    color: '#6366f1',
    link: { path: '/services', hash: '#development' }
  },
  {
    title: 'Contabilidad',
    desc: 'Gestión fiscal, declaraciones, facturación electrónica y servicios contables para empresas modernas.',
    icon: 'fas fa-calculator',
    color: '#06b6d4',
    link: { path: '/services', hash: '#accounting' }
  },
  {
    title: 'Marketing Digital',
    desc: 'Estrategias de visibilidad, campañas en redes, contenido, SEO, y producción audiovisual para destacar tu marca.',
    icon: 'fas fa-bullhorn',
    color: '#ec4899',
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

const testimonials = [
  {
    name: 'María González',
    role: 'Directora, Restaurante El Sabor',
    text: 'RexDevelop transformó completamente nuestra presencia digital. Ahora tenemos más clientes y mejor visibilidad.'
  },
  {
    name: 'Carlos Ramírez',
    role: 'CEO, TechSolutions MX',
    text: 'El equipo de desarrollo es excepcional. Entregaron nuestro proyecto a tiempo y superó nuestras expectativas.'
  },
  {
    name: 'Ana Martínez',
    role: 'Contadora, Consultoría Fiscal',
    text: 'Sus servicios contables son impecables. Nos ayudaron a optimizar nuestros procesos y cumplir con todas las obligaciones.'
  }
];

const seoItems = [
  {
    title: 'Consultas de intención clara',
    description: 'Transaccionales ("contratar desarrollo web"), locales ("agencia marketing en Tonalá", "contabilidad en Guadalajara"), y navegacionales (marca: "RexDevelop").'
  },
  {
    title: 'Palabras clave long-tail',
    description: 'Más específicas y con menor competencia ("desarrollo de software a medida en Jalisco").'
  },
  {
    title: 'Consultas problema-solución',
    description: 'Formuladas como necesidad ("cómo facturar electrónicamente", "mejorar posicionamiento SEO local").'
  },
  {
    title: 'Comparativas y de valor',
    description: '("mejor agencia de marketing digital en GDL", "desarrollo vs. plantilla para e‑commerce").'
  },
  {
    title: 'Consultas con modificadores',
    description: '"cerca de mí", por colonia o municipio ("Loma Dorada Tonalá"), por sector ("para restaurantes", "para pymes").'
  }
];

let observer: IntersectionObserver | null = null;

onMounted(async () => {
  await nextTick();
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
