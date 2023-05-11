<template>
  <div>
    <ToastMessage />
    <TheHeader />
    <slot></slot>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import ToastMessage from "~/components/response/ToastMessage.vue";
</script>
