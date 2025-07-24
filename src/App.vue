<template>
  <div id="app">
    <Header />
    <main class="animated-background">
      <router-view />
    </main>
    <Footer ref="footer" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods: {
    handleScroll() {
      const footer = this.$refs.footer.$el;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const scrollPosition = scrollTop + windowHeight;
      const triggerPoint = fullHeight - (fullHeight * 0.20); // 80% del final de la página

      if (scrollPosition >= triggerPoint) {
        const opacity = Math.min(1, (scrollPosition - triggerPoint) / (fullHeight * 0.20));
        footer.style.opacity = opacity;
      } else {
        footer.style.opacity = 0;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Ejecutar una vez para asegurarse de que el estado inicial es correcto
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
@import './assets/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.rexdevelop-text {
  font-size: 2rem;
  color: var(--color-primary);
}

.social-buttons {
  margin: 20px 0;
}

.social-button {
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
  color: var(--color-primary);
  transition: color 0.3s;
}

.social-button:hover {
  color: var(--color-accent);
}
</style>
