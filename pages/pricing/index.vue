<template>
  <Observer>
    <div class="isolate overflow-hidden">
      <div class="flow-root pb-16 pt-24 sm:pt-32 lg:pb-0 mb-36 lg:mb-96">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingHero
            :intervals="productsService.intervals"
            :selected-interval="productsService.getInterval()"
            @toggle-interval="toggleInterval"
          />
          <PricingCards :products="productsService.products" :selected-interval="productsService.getInterval()"/>
        </div>
      </div>
    </div>
  </Observer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Observer } from "mobx-vue-lite";

import PricingCards from "./components/PricingCards.vue";
import PricingHero from "./components/PricingHero.vue";

import { productsService } from "~/services/subscription/ProductsService";
import { Interval } from "~/models/subscription/Interval";

function toggleInterval(interval: Interval) {
  productsService.setInterval(interval);
}

await onMounted(() => {
  productsService.fetchProducts()
});
</script>
