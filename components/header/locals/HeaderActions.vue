<template>
  <!-- Header Theme && Language switch -->
  <SwitchThemeColor />
  <SwitchLanguage />
  <div class="hidden md:block">
    <!-- Header Login button -->
    <NuxtLink :to="localePath('/auth/login')">
      <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
        {{ $t('global.header.links.login') }}
      </BaseButton>
    </NuxtLink>
  </div>
  <!-- Header Get started button -->
  <NuxtLink :to="localePath('/auth/register')">
    <BaseButton :button-theme="themeButtonService.getThemeButtonById(2)">
      <span>{{ $t('global.header.links.get_started') }}</span>
    </BaseButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";

import BaseButton from "./../../base/BaseButton.vue"

const localePath = useLocalePath()
</script>
