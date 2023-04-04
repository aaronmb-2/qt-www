<template>
  <Observer>
    <div class="isolate overflow-hidden">
      <div class="flow-root pb-16 pt-24 sm:pt-32 lg:pb-0 mb-36 lg:mb-96">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingHero
            :item-current="tierService.getCurrentFrequency()"
            :frequencies="tierService.frequencies"
            @toggle-frequency="toggleFrequency"
          />
          <PricingCards />
        </div>
      </div>
    </div>
  </Observer>
</template>

<script setup lang="ts">
import { Observer } from "mobx-vue-lite";

import PricingCards from "./components/PricingCards.vue";
import PricingHero from "./components/PricingHero.vue";

import { tierService } from "~/services/pricing/TierService";
import { Frequency } from "~/models/pricing/Frequency";

function toggleFrequency(frequency: Frequency) {
  tierService.setCurrentFrequency(frequency);
}
</script>
