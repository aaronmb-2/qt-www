<template>
  <div id="features-cta" class="bg-slate-200 dark:bg-slate-700">
    <div class="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        {{ $t("features.cto.title_first") }}<br />
        <div class="dark:text-pink-200 text-pink-400">
          {{ $t("features.cto.title_second") }}
        </div>
      </h2>
      <div class="mt-10 flex items-center gap-x-6">
        <NuxtLink :to="localePath('/newsletter')">
          <BaseButton :button-theme="themeButtonService.getThemeButtonById(5)">
            <span>{{ $t("global.get_started") }}</span>
          </BaseButton>
        </NuxtLink>
        <NuxtLink :to="localePath('/about')">
          <BaseButton
            :button-theme="themeButtonService.getThemeButtonById(4)"
            class="font-bold"
          >
            {{ $t("global.learn_more") }} <span aria-hidden="true">→</span>
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
{{ $t("features.hero.title") }}

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";

import BaseButton from "~/components/base/BaseButton.vue";

const localePath = useLocalePath();
</script>
