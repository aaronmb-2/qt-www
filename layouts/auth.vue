<template>
    <slot></slot>
</template>

<script setup lang="ts">
// This import is here to make sure the proper theme is set 
// when reloading one of the Auth pages
import { themeColorService } from "~/services/theme/ThemeColorService";
themeColorService.getTheme()
</script>