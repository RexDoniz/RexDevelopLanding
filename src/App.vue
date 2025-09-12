<template>
  <div id="app" class="font-sans antialiased text-center m-0 p-0 box-border">
    <Header />
    <main class="bg-gray-50">
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

<style>
/* Route transitions */
.route-fade-enter-active, .route-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.route-fade-enter-from, .route-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
