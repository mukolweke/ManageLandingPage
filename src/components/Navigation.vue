<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const showNavDropdown = ref(false);

const emit = defineEmits(["toggleBackdrop"]);

function openMenu() {
  showNavDropdown.value = true;
  emit("toggleBackdrop");
}

function closeMenu() {
  showNavDropdown.value = false;
  emit("toggleBackdrop");
}
</script>

<template>
  <div class="relative container mx-auto">
    <div class="flex items-center justify-between px-4 md:px-0 py-10">
      <div class="w-auto h-auto py-2">
        <img
          src="../assets/images/logo.svg"
          class="object-cover"
          alt="Manage Logo"
          srcset=""
        />
      </div>

      <ul class="hidden md:flex space-x-2 md:space-x-6">
        <li class="hover:text-gray-blue">
          <a href="#">Pricing</a>
        </li>
        <li class="hover:text-gray-blue">
          <a href="#">Product</a>
        </li>
        <li class="hover:text-gray-blue">
          <a href="#">About Us</a>
        </li>
        <li class="hover:text-gray-blue">
          <a href="#">Careers</a>
        </li>
        <li class="hover:text-gray-blue">
          <a href="#">Community</a>
        </li>
      </ul>

      <div class="hidden md:block">
        <Button nav-btn />
      </div>

      <div class="md:hidden z-50">
        <span class="cursor-pointer" @click="openMenu" v-if="!showNavDropdown">
          <img src="../assets/images/icon-hamburger.svg" alt="icon-hamburger" />
        </span>
        <span class="cursor-pointer" @click="closeMenu" v-else>
          <img src="../assets/images/icon-close.svg" alt="icon-close" />
        </span>
      </div>

      <div
        class="
          md:hidden
          top-28
          left-4
          right-4
          bg-white
          shadow-lg
          rounded-md
          w-3/4
          mx-auto
          z-50
        "
        :class="{
          ' hidden': !showNavDropdown,
          ' absolute': showNavDropdown,
        }"
      >
        <ul
          class="
            flex flex-col
            divide-y divide-gray-blue
            text-center
            p-6
            text-primary-blue
            font-bold
          "
        >
          <li class="py-4"><a href="#">Pricing</a></li>
          <li class="py-4"><a href="#">Product</a></li>
          <li class="py-4"><a href="#">About Us</a></li>
          <li class="py-4"><a href="#">Careers</a></li>
          <li class="py-4"><a href="#">Community</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

