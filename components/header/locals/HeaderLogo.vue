<template>
    <NuxtLink :to="localePath('/home')" aria-label="Home">
        <BaseLogoTextWhite class="hidden dark:block w-auto h-10" />
        <BaseLogoTextBlue class="block dark:hidden w-auto h-10" />
    </NuxtLink>
</template>

<script setup lang="ts">
import BaseLogoTextWhite from "./../../base/BaseLogoTextWhite.vue"
import BaseLogoTextBlue from "./../../base/BaseLogoTextBlue.vue"

const localePath = useLocalePath()
</script>

