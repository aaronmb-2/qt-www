<template>
    <p>Theme Selector</p>
  <div class="hidden md:block">
    <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
      <NuxtLink to="/sign-in">Sign in</NuxtLink>
    </BaseButton>
  </div>
  <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
    <span> Get started <span class="hidden lg:inline">today</span> </span>
  </BaseButton>
</template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";

import BaseButton from "./../../base/BaseButton.vue"
</script>
