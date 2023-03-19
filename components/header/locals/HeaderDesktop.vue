<template>
    <div class="relative z-50 relative flex justify-between items-center">
        <div class="flex items-center space-x-6">
            <HeaderDesktopLogo />
            <HeaderDesktopLinks :links="links" />
        </div>
        <HeaderDesktopActions />
    </div>
</template>


<script setup lang="ts">
    import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";

    import HeaderDesktopActions from "./HeaderDesktopActions.vue"
    import HeaderDesktopLinks from "./HeaderDesktopLinks.vue"
    import HeaderDesktopLogo from "./HeaderDesktopLogo.vue";

    interface Props {
      links: PropsHeaderLinks[];
    }

    defineProps<Props>();
</script>
