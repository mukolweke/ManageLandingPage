<template>
  <a
    href="#"
    class="font-medium rounded-full text-sm"
    :class="{
      ' p-2 px-4': navBtn,
      ' py-3 px-6': !navBtn,
      ' bg-white hover:bg-gray-100 text-primary-red': ctaBtn,
      ' bg-primary-red hover:bg-light-red  text-white': !ctaBtn,
    }"
  >
    Get Started
  </a>
</template>

<script setup>
defineProps({
  navBtn: Boolean,
  ctaBtn: Boolean,
});
</script>