<script setup>
defineProps({
  index: Number,
  activeSlide: Number,
});
</script>

<template>
  <div v-if="index === activeSlide" class="carousel-slide">
    <slot></slot>
  </div>
</template>