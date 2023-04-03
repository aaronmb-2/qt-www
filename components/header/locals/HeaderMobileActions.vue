<template>
  <div class="flex flex-col text-center main-content ml-2">
    <NuxtLink @click="$emit('close')" :to="localePath('/auth/login')">
      <BaseButton :button-theme="themeButtonService.getThemeButtonById(7)">
          <span>{{ $t('global.header.links.login') }}</span>
      </BaseButton>
    </NuxtLink>
    <NuxtLink @click="$emit('close')" :to="localePath('/auth/register')" class="mt-2">
      <BaseButton :button-theme="themeButtonService.getThemeButtonById(6)">
          <span>{{ $t('global.get_started') }}</span>
      </BaseButton>
    </NuxtLink>
  </div>
  <button class="flex justify-between ml-2 mt-2" @click="$emit('toggleSwitchLanguage')">
    {{ $t('global.header.links.switch_language') }}
    <ChevronRightIcon class="h-5 w-5 mt-1" aria-hidden="true" />
  </button>
  <button class="flex justify-between ml-2" @click="$emit('toggleSwitchTheme')">
    {{ $t('global.header.links.switch_theme') }}
    <ChevronRightIcon class="h-5 w-5 mt-1" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

import BaseButton from "../../base/BaseButton.vue"

const localePath = useLocalePath()

</script>
