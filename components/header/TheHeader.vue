<template>
    <header class="py-10">
        <HeaderContainer>
            <nav class="relative z-50 flex justify-between">
                <div class="flex items-center md:gap-x-12">
                    <!-- Header Logo (left)-->
                    <HeaderLogo />
                    <!-- Header Links (middle)-->
                    <div class="hidden md:flex md:gap-x-6">
                        <HeaderLinks :links="links"/>
                    </div>
                </div>
                <!-- Header Actions (right)-->
                <div class="flex items-center gap-x-5 md:gap-x-2 lg:gap-x-4">
                    <HeaderActions />
                </div>
            </nav>
        </HeaderContainer>
    </header>
</template>

<script setup lang="ts">
import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";

import HeaderContainer from "./locals/HeaderContainer.vue";
import HeaderLogo from "./locals/HeaderLogo.vue"
import HeaderActions from "./locals/HeaderActions.vue"
import HeaderLinks from "./locals/HeaderLinks.vue"

const links: PropsHeaderLinks[] = [
    // Text comes from Translations
    { text: 'global.header.links.features', to: '/features' },
    { text: 'global.header.links.about', to: '/about' },
    { text: 'global.header.links.pricing', to: '/pricing' },
]
</script>
