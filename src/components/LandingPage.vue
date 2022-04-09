<script setup>
import { ref } from "vue";
import Navigation from "./Navigation.vue";
import Header from "./Header.vue";

const showBackdrop = ref(false);

function handleMenuOpen() {
  showBackdrop.value = !showBackdrop.value;
}
</script>

<template>
  <Navigation @toggle-backdrop="handleMenuOpen" />

  <Header />

  <!-- Backdrop -->
  <div
    v-if="showBackdrop"
    class="absolute inset-0 h-screen bg-light-dark"
  ></div>
</template>
