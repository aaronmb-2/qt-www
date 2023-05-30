<template>
    <Observer>
  <div class="relative z-10">
    <h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight">
      {{ $t("pricing.hero_leading_text") }}
    </h2>
    <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8">
      {{ $t("pricing.hero_helper_text") }}
    </p>
    <div class="mt-16 flex justify-center">
      <RadioGroup
        :v-model="productsService.getInterval()"
        class="grid grid-cols-2 gap-x-1 rounded-full bg-gray-100 dark:bg-white/5 p-1 text-center text-xs font-semibold leading-5"
      >
        <RadioGroupLabel class="sr-only">Payment Interval</RadioGroupLabel>
        <RadioGroupOption
          v-for="interval in productsService.intervals"
          :key="interval.value"
          :value="interval"
          as="template"
        >
          <div
            :class="[
              productsService.getInterval().label === interval.label
                ? 'bg-blue-900 dark:bg-blue-700 text-white'
                : '',
              'cursor-pointer rounded-full px-2.5 py-1',
            ]"
            @click="productsService.setInterval(interval)"
          >
            <span>{{ $t(interval.label) }}</span>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </div>
  </div>
</Observer>
</template>

<script setup lang="ts">
import { Observer } from "mobx-vue-lite";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

import { productsService } from "~/services/subscription/ProductsService";
</script>
