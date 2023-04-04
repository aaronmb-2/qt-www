<template>
  <div class="relative z-10">
    <h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight">
      {{ $t("pricing.hero_leading_text") }}
    </h2>
    <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8">
      {{ $t("pricing.hero_helper_text") }}
    </p>
    <div class="mt-16 flex justify-center">
      <RadioGroup
        :v-model="itemCurrent"
        class="grid grid-cols-2 gap-x-1 rounded-full bg-gray-100 dark:bg-white/5 p-1 text-center text-xs font-semibold leading-5"
      >
        <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
        <RadioGroupOption
          v-for="option in frequencies"
          :key="option.value"
          :value="option"
          as="template"
        >
          <div
            :class="[
              itemCurrent.label === option.label
                ? 'bg-blue-900 dark:bg-blue-700 text-white'
                : '',
              'cursor-pointer rounded-full px-2.5 py-1',
            ]"
            @click="$emit('toggleFrequency', option)"
          >
            <span>{{ $t(option.label) }}</span>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { TypeFrequencie } from "~/types/pricing/TypeFrequency";

interface Props {
  itemCurrent: TypeFrequencie;
  frequencies: TypeFrequencie[];
}

defineProps<Props>();

defineEmits<{
  (e: "toggleFrequency", option: TypeFrequencie): void;
}>();
</script>
