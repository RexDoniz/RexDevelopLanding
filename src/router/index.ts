import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../components/Contact.vue';
import ServicesView from '../components/Services.vue';

const DEFAULT_TITLE = 'RexDevelop – Soluciones en Desarrollo, Marketing y Contabilidad';
const DEFAULT_DESC = 'RexDevelop es tu socio digital en Tonalá y Guadalajara. Especialistas en desarrollo de software, marketing digital y servicios de contabilidad.';
const BASE_URL = 'https://rexdoniz.github.io/RexDevelopLanding';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Inicio | RexDevelop',
      description: DEFAULT_DESC,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'Nosotros | RexDevelop',
      description: 'Conoce al equipo de RexDevelop y nuestra misión de impulsar tu negocio con tecnología y marketing.',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contacto | RexDevelop',
      description: 'Ponte en contacto con RexDevelop. Te respondemos en menos de 24 horas.',
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      title: 'Servicios | Desarrollo, Contabilidad y Marketing | RexDevelop',
      description: 'Servicios de desarrollo de software, contabilidad y marketing digital para empresas en Jalisco.',
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  const title = (to.meta?.title as string) || DEFAULT_TITLE;
  const desc = (to.meta?.description as string) || DEFAULT_DESC;
  if (title) document.title = title;

  // Update description meta
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', desc);

  // Update Open Graph
  const setOG = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  setOG('og:title', title);
  setOG('og:description', desc);
  setOG('og:url', `${BASE_URL}${to.fullPath}`);

  // Update Twitter Cards
  const setTW = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  setTW('twitter:title', title);
  setTW('twitter:description', desc);
});

export default router;
