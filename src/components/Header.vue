<template>
  <header class="main-header" role="banner">
    <RouterLink to="/" class="logo" aria-label="Inicio RexDevelop">
      <img src="../assets/logo.webp" class="avatar" alt="Logo RexDevelop" />
      <h1 class="rexdevelop-text flicker">RexDevelop</h1>
    </RouterLink>

    <nav class="main-nav" aria-label="Navegación principal">
      <ul v-if="!isMobile" class="nav-list">
        <li><RouterLink to="/" exact-active-class="active-link">Inicio</RouterLink></li>
        <li><RouterLink to="/services" exact-active-class="active-link">Servicios</RouterLink></li>
        <li><RouterLink to="/about" exact-active-class="active-link">Nosotros</RouterLink></li>
        <li><RouterLink to="/contact" exact-active-class="active-link">Contacto</RouterLink></li>
      </ul>
      <button
        v-if="isMobile"
        class="menu-toggle"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Abrir menú"
        @click="toggleMobileMenu"
      >
        <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </nav>

    <transition name="drawer-fade">
      <aside
        v-if="isMobile && isMobileMenuOpen"
        class="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
        @click.self="toggleMobileMenu"
      >
        <ul class="mobile-menu">
          <li><RouterLink to="/" @click="closeMobileMenu">Inicio</RouterLink></li>
          <li><RouterLink to="/services" @click="closeMobileMenu">Servicios</RouterLink></li>
          <li><RouterLink to="/about" @click="closeMobileMenu">Nosotros</RouterLink></li>
          <li><RouterLink to="/contact" @click="closeMobileMenu">Contacto</RouterLink></li>
        </ul>
      </aside>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)
const isMobileMenuOpen = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth <= 900
  if (!isMobile.value) isMobileMenuOpen.value = false
}
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import '../assets/variables.css';

.main-header {
  background: rgba(34, 39, 54, 0.98);
  color: var(--color-text);
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 2vw;
  box-shadow: 0 3px 18px rgba(51,125,137,0.10), 0 1px 5px rgba(255,102,153,0.04);
  border-bottom: 2px solid rgba(255,102,153,0.04);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.7rem;
  user-select: none;
}
.logo:hover h1 {
  filter: drop-shadow(0 0 14px var(--color-accent));
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(255, 102, 153, 0.07);
  margin-right: 0.5rem;
}

.rexdevelop-text {
  font-size: 2rem;
  font-family: 'Inter', 'Montserrat', sans-serif;
  color: var(--color-accent);
  letter-spacing: 1.5px;
  margin: 0;
}

.flicker {
  animation: flicker 1.5s infinite alternate;
  text-shadow: 0 0 8px var(--color-accent), 0 0 18px var(--color-primary);
}
@keyframes flicker {
  0%   { opacity: 1; text-shadow: 0 0 12px var(--color-accent);}
  50%  { opacity: 0.77; text-shadow: 0 0 22px var(--color-primary);}
  100% { opacity: 0.88; text-shadow: 0 0 18px var(--color-accent);}
}

/* Nav */
.main-nav {
  display: flex;
  align-items: center;
  position: relative;
}
.nav-list {
  display: flex;
  gap: 2.1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-list li {
  display: flex;
}
.nav-list a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.11rem;
  position: relative;
  padding: 6px 2px;
  transition: color 0.2s;
}
.nav-list a::after {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 1.5px;
  transition: width 0.3s;
  margin: 0 auto;
}
.nav-list a:hover,
.nav-list a.active-link {
  color: var(--color-accent);
}
.nav-list a:hover::after,
.nav-list a.active-link::after {
  width: 80%;
}

/* Menu toggle (hamburger) */
.menu-toggle {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 2.2rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: color 0.3s;
  z-index: 1300;
}
.menu-toggle:focus { outline: 2px solid var(--color-accent); }

/* Drawer menu */
.drawer-fade-enter-active, .drawer-fade-leave-active {
  transition: opacity 0.36s cubic-bezier(0.4,0,0.2,1);
}
.drawer-fade-enter-from, .drawer-fade-leave-to {
  opacity: 0;
}
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 85vw;
  max-width: 340px;
  height: 100vh;
  background: rgba(34, 39, 54, 0.99);
  box-shadow: -4px 0 16px rgba(255, 102, 153, 0.09);
  z-index: 2000;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  animation: drawerIn 0.28s;
}
@keyframes drawerIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.mobile-menu {
  list-style: none;
  margin: 0;
  padding: 0 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.mobile-menu li a {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.7rem 0;
  border-bottom: 1px solid rgba(255,102,153,0.10);
  transition: color 0.23s;
}
.mobile-menu li a:active,
.mobile-menu li a:hover {
  color: var(--color-accent);
}

/* Responsive behavior */
@media (max-width: 600px) {
  .main-header {
    padding: 0.5rem 1rem;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .rexdevelop-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 900px) {
  .nav-list { display: none; }
  .menu-toggle { display: block; }
}
@media (min-width: 901px) {
  .menu-toggle { display: none; }
  .mobile-drawer { display: none; }
}
</style>
