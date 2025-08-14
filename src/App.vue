<template>
  <div id="app">
    <Header />
    <main class="animated-background">
      <router-view v-slot="{ Component }">
        <transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
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
};
</script>

<style scoped>
@import './assets/main.css';

#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
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
  transition: color 0.3s, transform 0.3s;
}

.social-button:hover {
  color: var(--color-accent);
  transform: scale(1.1);
}
</style>
