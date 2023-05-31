<template>
  <div
    class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3 max-w-sm animate-pulse"
  >
    <PricingBackground />
    <div
      v-for="product in fakeProducts"
      :key="product.id"
      class="bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0 relative rounded-2xl"
    >
      <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"
        ></div>
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
        >
          <div class="mt-2 flex items-center gap-x-4">
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 tracking-tight"
            ></div>
          </div>
          <div
            class="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          ></div>
        </div>
        <div class="mt-8 flow-root sm:mt-10">
          <ul
            role="list"
            class="divide-white/5 border-white/5 text-white -my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
          >
            <li
              v-for="usp in product.usps"
              :key="usp"
              class="flex gap-x-3 py-2"
            >
              <div
                class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingBackground from "./PricingBackground.vue";

const fakeProducts = [
  { id: 1, usps: [1, 2, 3, 4, 5] },
  { id: 2, usps: [1, 2, 3, 4, 5, 6, 7] },
  { id: 3, usps: [1, 2, 3, 4] },
];
</script>
