<template>
    <header class="py-10">
        <HeaderContainer>
            <nav class="relative z-50 flex justify-between">
                <div class="flex items-center md:gap-x-12">
                    <!-- Header Logo (left)-->
                    <HeaderLogo />
                    <!-- Header Links (middle)-->
                    <div class="hidden md:flex md:gap-x-6">
                        <HeaderLink
                            v-for="link in links" 
                            :key="link.text" 
                            :text="link.text" 
                            :to="link.to" />
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
import HeaderContainer from "./locals/HeaderContainer.vue";
import HeaderLogo from "./locals/HeaderLogo.vue"
import HeaderActions from "./locals/HeaderActions.vue"
import HeaderLink from "./locals/HeaderLink.vue"

const links = [
    { text: 'Features', to: '/features' },
    { text: 'About', to: '/about' },
    { text: 'Pricing', to: '/pricing' },
]
</script>
