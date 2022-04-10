<script setup>
import Button from "./Button.vue";
import { ref, computed } from "vue";
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";

const activeSlide = ref(1);

function setActiveSlide(index) {
  activeSlide.value = index;
}

const feedbacks = ref([
  {
    name: "Anisha Li",
    avatar: "avatar-anisha.png",
    comment:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    avatar: "avatar-ali.png",
    comment:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    avatar: "avatar-richard.png",
    comment:
      "“Manage allows us to provide structure and process. it keeps us organized and focused. I can't stop recommending them to everyone i talk to.”",
  },
  {
    name: "Shania Gough",
    avatar: "avatar-shanai.png",
    comment:
      "“There software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.”",
  },
]);
</script>

<template>
  <section
    id="feedback"
    class="my-32 text-center px-4 md:px-0 mx-auto flex flex-col"
  >
    <h1 class="text-4xl font-bold text-center">What they've said</h1>

    <div
      class="
        hidden
        md:grid
        grid-cols-2
        lg:grid-cols-4
        w-full
        mt-28
        px-4
        md:gap-x-8 md:gap-y-14
        lg:gap-6
      "
    >
      <div
        class="
          flex flex-col
          items-center
          p-6
          lg:space-y-6
          rounded-lg
          bg-light-gray
          w-full
        "
        v-for="feedback in feedbacks"
        :key="feedback.name"
      >
        <div class="w-16 -mt-14">
          <img
            src="../assets/images/avatar-anisha.png"
            alt="Feedback Avatar"
            class="w-full object-contain"
          />
        </div>

        <h5 class="text-lg font-bold text-center">{{ feedback.name }}</h5>
        <p class="text-sm text-gray-blue text-center">
          {{ feedback.comment }}
        </p>
      </div>
    </div>

    <Carousel
      class="mt-20 md:hidden"
      :slides="feedbacks.length"
      :active-slide="activeSlide"
      @update="setActiveSlide"
    >
      <CarouselSlide
        v-for="(feedback, index) in feedbacks"
        :key="feedback.name"
        :index="index"
        :active-slide="activeSlide"
      >
        <div
          class="
            flex flex-col
            items-center
            justify-center
            p-6
            space-y-6
            rounded-lg
            bg-light-gray
            w-full
          "
        >
          <div class="w-16 -mt-14">
            <img
              src="../assets/images/avatar-anisha.png"
              alt="Feedback Avatar"
              class="w-full object-contain"
            />
          </div>

          <h5 class="text-lg font-bold text-center">{{ feedback.name }}</h5>
          <p class="text-sm text-gray-blue text-center">
            {{ feedback.comment }}
          </p>
        </div>
      </CarouselSlide>
    </Carousel>

    <div class="text-center mt-16">
      <Button />
    </div>
  </section>
</template>