<template>
  <NuxtLink :to="localePath('/home')" aria-label="Home">
    <BaseLogoTextLight class="w-auto h-10" />
  </NuxtLink>
</template>

<script setup lang="ts">
import BaseLogoTextLight from "./../../base/BaseLogoTextLight.vue"

const localePath = useLocalePath()
</script>
