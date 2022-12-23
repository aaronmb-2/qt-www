<template>
    <BaseButton 
        :button-theme="themeButtonService.getThemeButtonById(1)" 
        v-for="link in links">
        <NuxtLink 
            :to="link.to">
            {{ link.text }}
        </NuxtLink>
    </BaseButton>
</template>

<script setup lang="ts">
import { themeButtonService } from "~/services/theme/ThemeButtonService";
import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";

import BaseButton from "../../base/BaseButton.vue"

interface Props {
    links: PropsHeaderLinks[];
}

defineProps<Props>();
</script>
