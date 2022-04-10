<script setup>
defineProps({
  slides: Number,
  activeSlide: Number,
});

const emit = defineEmits(["update"]);
</script>

<template>
  <div>
    <slot></slot>

    <div class="flex justify-center space-x-4 mt-10">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{
          'bg-primary-red': activeSlide === index,
          'bg-lighter-red': activeSlide !== index,
        }"
        @click="emit('update', index)"
        class="w-3 h-3 rounded-full cursor-pointer"
      ></div>
    </div>
  </div>
</template>