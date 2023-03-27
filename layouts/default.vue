<template>
    <TheHeader />
     <slot></slot>
    <TheFooter />
</template>

<script setup lang="ts">
    import TheHeader from "@/components/header/TheHeader.vue"
    import TheFooter from "@/components/footer/TheFooter.vue"
</script>
