<template>
    <NuxtLink 
        :to="localePath('/home')" 
        aria-label="Home">
        <BaseLogo class="w-auto h-10" />
    </NuxtLink>
</template>

<script setup lang="ts">
import BaseLogo from "../../base/BaseLogo.vue"

const localePath = useLocalePath()
</script>


