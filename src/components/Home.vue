<template>
  <div id="home" class="page-content">
    <!-- Hero Section -->
    <section class="hero animated-background-reverse glass-hero" aria-labelledby="site-title">
      <div class="hero-content reveal">
        <h1 id="site-title" class="glow rexdevelop-text">RexDevelop</h1>
        <p class="hero-tagline">Innovación en Desarrollo, Marketing y Contabilidad para tu empresa.</p>
        <div class="hero-cta">
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
    <section class="services glass-section" aria-labelledby="services-title">
          <h2 id="services-title" class="section-title reveal">¿Qué hacemos?</h2>
      <div class="service-list">
        <div class="service-card glass-card reveal" v-for="service in serviceData" :key="service.title">
          <div class="service-icon" :style="{ color: service.color }" :aria-label="service.title" role="img">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-name">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
          <RouterLink :to="service.link" class="service-link" aria-label="Ver más sobre {{ service.title }}">
            Ver más <i class="fas fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="about glass-section" aria-labelledby="about-title">
          <h2 id="about-title" class="section-title reveal">¿Quiénes somos?</h2>
      <p class="section-intro">
        Un equipo multidisciplinario que combina tecnología, creatividad y experiencia para impulsar tu negocio. Conoce nuestra esencia y por qué podemos ser tu mejor socio digital.
      </p>
      <div class="about-card glass-card reveal">
        <div class="about-image">
          <i class="fas fa-users about-icon" aria-label="Equipo RexDevelop"></i>
        </div>
        <div class="about-card-content">
          <h3>Sobre Nosotros</h3>
          <p>
            RexDevelop está formado por especialistas en desarrollo de software, marketing digital y contabilidad. Nuestra pasión es encontrar soluciones personalizadas y eficaces para cada cliente, manteniéndonos siempre a la vanguardia de las tendencias tecnológicas.
          </p>
          <div class="about-services">
            <div class="about-service-item glass-service reveal" v-for="detail in aboutServices" :key="detail.title">
              <i :class="detail.icon + ' service-detail-icon'" aria-hidden="true"></i>
              <div>
                <h4>{{ detail.title }}</h4>
                <p>{{ detail.desc }}</p>
              </div>
            </div>
          </div>
          <p>
            Además, creemos en la formación continua y el aprendizaje colaborativo, asegurando que nuestros servicios evolucionen junto a las necesidades del mercado.
          </p>
          <RouterLink to="/about" aria-label="Saber más sobre nosotros">
            <Button label="Conoce más sobre nosotros" icon="pi pi-info-circle" severity="help" rounded />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Contact Call -->
    <section class="contact-call animated-background-reverse glass-contact" aria-labelledby="contact-title">
      <div class="contact-call-content reveal">
        <h2 id="contact-title">¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <p>Te ayudamos a digitalizar tu empresa y hacerla crecer. Cuéntanos tu proyecto, te responderemos en menos de 24 horas.</p>
        <RouterLink to="/contact" aria-label="Contactar a RexDevelop">
          <Button label="Contáctanos ahora" icon="pi pi-comments" severity="success" rounded />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

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
<style scoped>
@import '../assets/variables.css';

.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Glassmorphism backgrounds */
.glass-hero, .glass-section, .glass-card, .glass-contact, .glass-service {
  background: rgba(34, 39, 54, 0.78);
  backdrop-filter: blur(12px) saturate(130%);
  box-shadow: 0 10px 40px 0 rgba(51, 125, 137, 0.09), 0 1px 8px rgba(255,102,153,0.06);
  border-radius: 18px;
}

.glass-card {
  border: 1.5px solid rgba(255,255,255,0.06);
  box-shadow: 0 8px 32px rgba(0,0,0,0.09);
}

.glass-service {
  border: 1.2px solid var(--color-accent);
  box-shadow: 0 4px 20px rgba(255, 102, 153, 0.08);
  margin-bottom: 0.5rem;
}

.glass-contact {
  margin-bottom: 2rem;
}

/* Hero Section */
.hero {
  padding: 6rem 2rem 3.5rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero-tagline {
  font-size: 1.5rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary, .btn-secondary, .btn-accent {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  border: 2px solid transparent;
  box-shadow: 0 2px 12px rgba(255, 102, 153, 0.06);
  font-size: 1rem;
}
.btn-primary {
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  color: white;
}
.btn-primary:hover {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.btn-secondary {
  background: transparent;
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}
.btn-secondary:hover {
  background: var(--color-secondary);
  color: white;
}
.btn-accent {
  background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
  color: #fff;
}
.btn-accent:hover {
  background: transparent;
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  letter-spacing: 2px;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 3px;
}

.section-intro {
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--color-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.services, .about {
  width: 92vw;
  max-width: 1200px;
  padding: 4rem 0;
  margin: 0 auto;
}

/* Services Cards */
.service-list {
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
}
.service-card {
  padding: 2rem 1.2rem 2rem 1.2rem;
  width: 300px;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  overflow: hidden;
  background: transparent;
}
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  border-radius: 16px 16px 0 0;
}
.service-card:hover {
  transform: translateY(-10px) scale(1.03) rotate(-1.2deg);
  box-shadow: 0 20px 40px rgba(255,102,153,0.12), 0 5px 20px rgba(51,125,137,0.10);
  z-index: 1;
}
.service-card:hover::before {
  transform: scaleX(1);
}
.service-icon {
  font-size: 3.1rem;
  margin-bottom: 1.3rem;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), text-shadow 0.2s;
  filter: drop-shadow(0 0 8px var(--color-accent));
}
.service-card:hover .service-icon {
  transform: scale(1.13) rotate(3deg);
  text-shadow: 0 0 14px var(--color-accent);
}

.service-card h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.service-card p {
  font-size: 1rem;
  color: var(--color-secondary);
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: none;
  transition: gap 0.28s cubic-bezier(0.4,0,0.2,1);
}
.service-link:hover {
  gap: 0.99rem;
  text-shadow: 0 0 7px var(--color-accent);
}

/* About Section */
.about-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 900px;
  width: 100%;
  margin: 2rem auto 0 auto;
  box-sizing: border-box;
  box-shadow: 0 6px 32px rgba(255, 102, 153, 0.08), 0 2px 12px rgba(51,125,137,0.04);
  background: rgba(34, 39, 54, 0.78);
  border-radius: 18px;
  border: 1.5px solid rgba(255,255,255,0.06);
}

.about-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1.5rem 0;
  background: linear-gradient(135deg, rgba(255, 102, 153, 0.11) 0%, rgba(51, 125, 137, 0.13) 100%);
  border-radius: 8px 8px 0 0;
  margin-bottom: 2rem;
}

.about-card-content {
  padding: 0 1.3rem 1rem 1.3rem;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 700px) {
  .about-card {
    max-width: 100vw;
    padding: 1.2rem 0.1rem 1.1rem 0.1rem;
    margin: 1.2rem 0 0 0;
  }
  .about-card-content {
    padding: 0 0.1rem 0.5rem 0.1rem;
  }
  .about-image {
    padding: 0.7rem 0 0.6rem 0;
    margin-bottom: 1rem;
  }
}
.about-card-content h4 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.about-card-content p {
  font-size: 1.1rem;
  color: var(--color-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.about-services {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin: 2rem 0;
}
.about-service-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: rgba(255,255,255,0.06);
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(255, 102, 153, 0.07);
  transition: box-shadow 0.2s, transform 0.22s;
}
.about-service-item:hover {
  box-shadow: 0 10px 24px rgba(255, 102, 153, 0.18), 0 4px 16px rgba(51,125,137,0.12);
  transform: scale(1.03) translateY(-2px);
  background: linear-gradient(135deg, rgba(255,102,153,0.10), rgba(51,125,137,0.13));
}
.service-detail-icon {
  font-size: 2.2rem;
  color: var(--color-primary);
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px var(--color-accent));
}
.about-service-item h5 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
}

/* Contact Call Section */
.contact-call {
  color: var(--color-primary);
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}
.contact-call-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}
.contact-call h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  text-shadow: 0 2px 20px var(--color-primary);
}
.contact-call p {
  font-size: 1.2rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;
}

/* Animations */
.glow {
  animation: glow 2.2s infinite alternate;
  text-shadow: 0 0 10px rgba(255, 102, 153, 0.6), 0 0 16px var(--color-accent);
}
@keyframes glow {
  from {
    text-shadow: 0 0 7px rgba(255, 102, 153, 0.4);
  }
  to {
    text-shadow: 0 0 22px rgba(255, 102, 153, 0.85), 0 0 30px var(--color-primary);
  }
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .services, .about { padding: 3rem 0; }
  .service-list { gap: 1.1rem; }
  .service-card { width: 96vw; max-width: 355px; }
  .about-card { padding: 1.5rem; }
  .about-service-item { flex-direction: column; align-items: center; text-align: center; gap: 0.5rem; }
  .hero h2 { font-size: 2.3rem; }
  .hero-tagline { font-size: 1.1rem; }
}

@media (max-width: 700px) {
  .services, .about { width: 100vw; }
  .section-title { font-size: 1.45rem; }
  .about-card-content h4 { font-size: 1.3rem; }
  .hero { padding: 2.7rem 0.3rem 2rem 0.3rem; }
  .about-image { padding: 0.9rem 0 0.7rem 0; }
  .about-icon { font-size: 2.8rem; }
  .contact-call { padding: 2rem 0.5rem; }
  .about-card {
    max-width: 100vw;
    padding: 1.2rem 0.1rem 1.1rem 0.1rem;
    margin: 1.2rem 0 0 0;
  }
  .about-card-content {
    padding: 0 0.1rem 0.5rem 0.1rem;
  }
  .about-image {
    padding: 0.7rem 0 0.6rem 0;
    margin-bottom: 1rem;
  }
  .about-services {
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
