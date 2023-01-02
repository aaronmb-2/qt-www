<template>
  <NuxtLink v-for="link in links" :to=localePath(link.to)>
    <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
      {{ $t(link.text) }}
    </BaseButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";
import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";
import BaseButton from "../../base/BaseButton.vue"

const localePath = useLocalePath()

interface Props {
  links: PropsHeaderLinks[];
}

defineProps<Props>();
</script>
