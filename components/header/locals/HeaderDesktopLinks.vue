<template>
  <NuxtLink v-for="link in links" :key="link.text" :to="localePath(link.to)">
    <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
      {{ $t(link.text) }}
    </BaseButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import BaseButton from "../../base/BaseButton.vue";

import { themeButtonService } from "~/services/theme/ThemeButtonService";
import { PropsHeaderLink } from "~/types/PropsHeaderLink";

const localePath = useLocalePath();

interface Props {
  links: PropsHeaderLink[];
}

defineProps<Props>();
</script>
