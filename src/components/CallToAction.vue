<template>
  <section id="cta" class="bg-primary-red">
    <div
      class="
        container
        flex flex-col
        items-center
        justify-between
        px-6
        py-24
        mx-auto
        space-y-12
        md:py-12 md:flex-row md:space-y-0
      "
    >
      <h2
        class="
          text-5xl
          font-bold
          leading-tight
          text-center text-white
          md:text-4xl md:max-w-md md:text-left
        "
      >
        Simplify how your team works today
      </h2>
      <div>
        <Button ctaBtn />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
</script>