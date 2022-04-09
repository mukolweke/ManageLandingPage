<template>
  <button
    class="
      bg-primary-red
      text-white
      font-medium
      rounded-full
      hover:bg-light-red
      text-sm
    "
    :class="{ ' p-2 px-4': navBtn, ' py-3 px-6': !navBtn }"
  >
    Get Started
  </button>
</template>

<script setup>
defineProps({
  navBtn: Boolean,
});
</script>