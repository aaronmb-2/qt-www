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
                        <!-- <BaseButton 
                            :button-theme="themeButtonService.getThemeButtonById(1)" 
                            v-for="link in links">
                            <NuxtLink 
                                :to="link.to">
                                {{ link.text }}
                            </NuxtLink>
                        </BaseButton> -->
                    </div>
                </div>
                <!-- Header Actions (right)-->
                <div class="flex items-center gap-x-5 md:gap-x-8">
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
    { text: 'Features', to: '/features' },
    { text: 'About', to: '/about' },
    { text: 'Pricing', to: '/pricing' },
]
</script>
