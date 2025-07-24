<template>
  <transition
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
    enter-active-class="accordion-enter-active"
    leave-active-class="accordion-leave-active"
    enter-from-class="accordion-enter"
    leave-to-class="accordion-leave-to"
  >
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">
function enter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = '0';
  element.style.opacity = '0';
  element.style.filter = 'blur(8px)';
  element.style.transform = 'translateY(32px)';
  // Trigger a reflow
  void element.offsetHeight;
  element.style.transition = 'height 0.64s cubic-bezier(0.32,0.48,0.23,1), opacity 0.44s cubic-bezier(0.32,0.48,0.23,1), filter 0.32s, transform 0.40s';
  element.style.height = element.scrollHeight + 'px';
  element.style.opacity = '1';
  element.style.filter = 'blur(0)';
  element.style.transform = 'translateY(0)';
}
function afterEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = 'auto';
  element.style.transition = '';
}
function leave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = element.scrollHeight + 'px';
  element.style.opacity = '1';
  element.style.filter = 'blur(0)';
  element.style.transform = 'translateY(0)';
  // Trigger a reflow
  void element.offsetHeight;
  element.style.transition = 'height 0.64s cubic-bezier(0.32,0.48,0.23,1), opacity 0.44s cubic-bezier(0.32,0.48,0.23,1), filter 0.22s, transform 0.33s';
  element.style.height = '0';
  element.style.opacity = '0';
  element.style.filter = 'blur(8px)';
  element.style.transform = 'translateY(28px)';
}
function afterLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = '';
  element.style.transition = '';
  element.style.opacity = '';
  element.style.filter = '';
  element.style.transform = '';
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  /* No transition here: control via JS for dynamic height */
  overflow: hidden;
  will-change: height, opacity, filter, transform;
}
.accordion-enter,
.accordion-leave-to {
  height: 0;
  opacity: 0;
  filter: blur(8px);
  transform: translateY(28px);
}
</style>
