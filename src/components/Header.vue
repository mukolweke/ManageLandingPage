<script setup>
import Button from "./Button.vue";
</script>

<template>
  <section
    class="
      relative
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row
      items-center
      mt-10
      mb-32
      px-4
      md:px-0
    "
  >
    <div class="flex flex-col space-y-10 md:w-1/2">
      <h1
        class="
          max-w-md
          md:max-w-none
          mx-auto
          text-4xl
          font-bold
          text-center
          md:text-5xl md:text-left
        "
      >
        Bring everyone together to build better products
      </h1>
      <p
        class="
          max-w-sm
          md:max-w-none
          mx-auto
          text-center
          leading-relaxed
          md:text-left
        "
      >
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <div class="flex justify-center md:justify-start">
        <Button />
      </div>
    </div>

    <div class="md:w-1/2">
      <img src="../assets/images/illustration-intro.svg" alt="Header Banner" />
    </div>
  </section>
</template>
