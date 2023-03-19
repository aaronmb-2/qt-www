<template>
    <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
            <!-- Header Logo (left) -->
            <HeaderMobileLogo />
        </div>
        <div class="flex items-center gap-x-4 align-middle">
            <!-- Header Get started button -->
            <NuxtLink :to="localePath('/auth/register')">
                <BaseButton :button-theme="themeButtonService.getThemeButtonById(3)">
                    <span>{{ $t('global.header.links.get_started') }}</span>
                </BaseButton>
            </NuxtLink>
            <!-- Mobile header Dropdown -->
            <HeaderMobileDropdown :links="links"/>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";
import { themeButtonService } from "~/services/theme/ThemeButtonService";
import HeaderMobileLogo from "./HeaderMobileLogo.vue"

const localePath = useLocalePath()

interface Props {
    links: PropsHeaderLinks[];
}

defineProps<Props>();
</script>

