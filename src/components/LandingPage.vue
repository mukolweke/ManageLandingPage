<script setup>
import { ref } from "vue";
import Navigation from "./Navigation.vue";
import HeaderSection from "./Header.vue";
import AboutSection from "./About.vue";
import FeedbackSection from "./Feedback.vue";
import FooterSection from "./Footer.vue";
import CTASection from "./CallToAction.vue";

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

  <FeedbackSection />

  <CTASection />

  <FooterSection />

  <!-- Backdrop -->
  <div
    v-if="showBackdrop"
    class="absolute inset-0 h-screen bg-light-dark"
  ></div>
</template>
