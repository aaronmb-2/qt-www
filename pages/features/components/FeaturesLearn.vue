<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        {{ $t("features.learn.title") }}
      </h2>
      <p class="mt-6 text-lg leading-8 dark:text-slate-500 text-slate-700">
        {{ $t("features.learn.help_text") }}
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div v-for="feature in features" :key="feature.title">
        <dt class="font-semibold dark:text-pink-200 text-pink-400">
          {{ $t(feature.title) }}
        </dt>
        <dd class="mt-1">{{ $t(feature.text) }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
const features = [
  {
    title: "features.learn.learn.1.title",
    text: "features.learn.learn.1.text",
  },
  {
    title: "features.learn.learn.2.title",
    text: "features.learn.learn.2.text",
  },
  {
    title: "features.learn.learn.3.title",
    text: "features.learn.learn.3.text",
  },
  {
    title: "features.learn.learn.4.title",
    text: "features.learn.learn.4.text",
  },
  {
    title: "features.learn.learn.5.title",
    text: "features.learn.learn.5.text",
  },
  {
    title: "features.learn.learn.6.title",
    text: "features.learn.learn.6.text",
  },
];
</script>
