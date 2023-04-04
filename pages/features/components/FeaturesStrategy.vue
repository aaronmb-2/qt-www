<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2
          class="text-base font-semibold leading-7 dark:text-pink-200 text-pink-400"
        >
          {{ $t("features.strategies.pre_title") }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ $t("features.strategies.title") }}
        </p>
        <p class="mt-6 text-lg leading-8 dark:text-slate-500 text-slate-700">
          {{ $t("features.strategies.help_text") }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-200"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              {{ $t(feature.title) }}
            </dt>
            <dd class="mt-2 text-base leading-7">{{ $t(feature.text) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    title: "features.strategy.1.title",
    text: "features.strategy.1.text",
    icon: CloudArrowUpIcon,
  },
  {
    title: "features.strategy.2.title",
    text: "features.strategy.2.text",
    icon: LockClosedIcon,
  },
  {
    title: "features.strategy.3.title",
    text: "features.strategy.3.text",
    icon: ArrowPathIcon,
  },
  {
    title: "features.strategy.4.title",
    text: "features.strategy.4.text",
    icon: FingerPrintIcon,
  },
];
</script>
