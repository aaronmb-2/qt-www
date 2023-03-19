<template>
    <HeaderContainer>
        <!-- Header Desktop -->
        <header class="hidden lg:block">
            <HeaderDesktop :links="links" />
        </header>
        <!-- Header Mobile -->
        <header class="lg:invisible lg:collapse">
            <HeaderMobile :links="links" />
        </header>
    </HeaderContainer>
</template>

<script setup lang="ts">
import HeaderDesktop from "./locals/HeaderDesktop.vue"
import HeaderContainer from "./locals/HeaderContainer.vue"

import { PropsHeaderLinks } from "~/types/PropsHeaderLinks";

const links: PropsHeaderLinks[] = [
    // Text comes from Translations
    { text: 'global.header.links.features', to: '/features' },
    { text: 'global.header.links.about', to: '/about' },
    { text: 'global.header.links.pricing', to: '/pricing' },
]

// const links: PropsHeaderActions[] = [
//     // Text comes from Translations
//     { text: 'global.header.links.features', to: '/features' },
//     { text: 'global.header.links.about', to: '/about' },
//     { text: 'global.header.links.pricing', to: '/pricing' },
// ]
</script>
