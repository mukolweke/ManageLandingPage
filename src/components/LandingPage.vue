<script setup>
import { ref } from "vue";
import Navigation from "./Navigation.vue";
import HeaderSection from "./Header.vue";
import AboutSection from "./About.vue";

const showBackdrop = ref(false);

function handleMenuOpen() {
  showBackdrop.value = !showBackdrop.value;
  document.body.classList.toggle("overflow-hidden");
}
</script>

<template>
  <Navigation @toggle-backdrop="handleMenuOpen" />

  <HeaderSection />

  <AboutSection />

  <!-- Backdrop -->
  <div
    v-if="showBackdrop"
    class="absolute inset-0 h-screen bg-light-dark"
  ></div>
</template>
