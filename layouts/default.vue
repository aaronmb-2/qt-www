<template>
    <TheHeader />
    <p>Default layout</p>
    <slot></slot>
</template>

<script setup lang="ts">
    import TheHeader from "@/components/header/TheHeader.vue"
</script>
