<template>
  <div>
    <slot></slot>
    <ModalMessage />
    <ToastMessage />
  </div>
</template>

<script setup lang="ts">
// This import is here to make sure the proper theme is set
// when reloading one of the Auth pages
import { themeColorService } from "~/services/theme/ThemeColorService";
import ToastMessage from "~/components/response/ToastMessage.vue";
import ModalMessage from "~/components/response/ModalMessage.vue";
themeColorService.getTheme();
</script>
