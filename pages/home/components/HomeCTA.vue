<template>
      <div class="mx-auto max-w-7xl px-6 py-8 sm:py-8 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="localePath('/auth/register')">
              <BaseButton :button-theme="themeButtonService.getThemeButtonById(5)">
                <span>{{ $t('global.get_started') }}</span>
              </BaseButton>
            </NuxtLink>
            <NuxtLink :to="localePath('/features')">
              <BaseButton :button-theme="themeButtonService.getThemeButtonById(4)" class="font-bold">
                {{ $t('global.learn_more') }} <span aria-hidden="true">→</span>
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ $t('home.cta_text') }}</h2>
      </div>
  </template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";

import BaseButton from "~/components/base/BaseButton.vue"

const localePath = useLocalePath()
</script>