<template>
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tightsm:text-4xl">
        {{ $t("about.values.header.title") }}
      </h2>
      <p class="mt-6 text-lg leading-8">{{ $t("about.values.header.text") }}</p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16"
    >
      <div v-for="value in values" :key="value.title" class="relative pl-9">
        <dt class="inline font-semibold">
          <component
            :is="value.icon"
            class="dark:text-pink-200 text-pink-400 absolute top-1 left-1 h-5 w-5"
            aria-hidden="true"
          />
          {{ $t(value.title) }}
        </dt>
        {{ " " }}
        <dd class="inline">{{ $t(value.text) }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  ChatBubbleLeftIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ChartBarIcon,
  LockClosedIcon,
} from "@heroicons/vue/20/solid";
const values = [
  {
    title: "about.values.1.title",
    text: "about.values.1.text",
    icon: RocketLaunchIcon,
  },
  {
    title: "about.values.2.title",
    text: "about.values.2.text",
    icon: ChatBubbleLeftIcon,
  },
  {
    title: "about.values.3.title",
    text: "about.values.3.text",
    icon: LockClosedIcon,
  },
  {
    title: "about.values.4.title",
    text: "about.values.4.text",
    icon: AcademicCapIcon,
  },
  {
    title: "about.values.5.title",
    text: "about.values.5.text",
    icon: CodeBracketIcon,
  },
  {
    title: "about.values.6.title",
    text: "about.values.6.text",
    icon: ChartBarIcon,
  },
];
</script>
