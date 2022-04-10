<template>
  <footer class="bg-dark-blue">
    <div
      class="
        container
        flex flex-col-reverse
        justify-between
        px-6
        py-10
        mx-auto
        space-y-8
        md:flex-row md:space-y-0
      "
    >
      <div
        class="
          flex flex-col-reverse
          items-center
          justify-between
          space-y-12
          md:flex-col md:space-y-0 md:items-start
        "
      >
        <div class="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2022, All Rights Reserved
        </div>
        <div>
          <img src="../assets/images/logo-white.svg" class="h-8" alt="" />
        </div>
        <div class="flex justify-center space-x-4">
          <a href="#">
            <img
              src="../assets/images/icon-facebook.svg"
              alt="Social Icon"
              class="h-4"
            />
          </a>

          <a href="#">
            <img
              src="../assets/images/icon-youtube.svg"
              alt="Social Icon"
              class="h-4"
            />
          </a>

          <a href="#">
            <img
              src="../assets/images/icon-twitter.svg"
              alt="Social Icon"
              class="h-4"
            />
          </a>

          <a href="#">
            <img
              src="../assets/images/icon-pinterest.svg"
              alt="Social Icon"
              class="h-4"
            />
          </a>

          <a href="#">
            <img
              src="../assets/images/icon-instagram.svg"
              alt="Social Icon"
              class="h-4"
            />
          </a>
        </div>
      </div>

      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white">
          <a href="#" class="hover:text-light-red">Home</a>
          <a href="#" class="hover:text-light-red">Pricing</a>
          <a href="#" class="hover:text-light-red">Products</a>
          <a href="#" class="hover:text-light-red">About</a>
        </div>
        <div class="flex flex-col space-y-3 text-white">
          <a href="#" class="hover:text-light-red">Careers</a>
          <a href="#" class="hover:text-light-red">Community</a>
          <a href="#" class="hover:text-light-red">Privacy Policy</a>
        </div>
      </div>

      <!-- Input Container -->
      <div class="flex flex-col justify-between">
        <form>
          <div class="flex space-x-3">
            <input
              type="text"
              class="flex-1 px-4 rounded-full focus:outline-none"
              placeholder="Updated in your inbox"
            />
            <button
              class="
                px-6
                py-2
                text-white
                rounded-full
                bg-primary-red
                hover:bg-light-red
                focus:outline-none
              "
            >
              Go
            </button>
          </div>
        </form>
        <div class="hidden text-white md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script scope>
</script>