<template>
  <Popover>
    <PopoverButton class="relative z-10 flex h-8 w-8 items-center justify-center">
        <Bars3Icon class="h-6 w-6 dark:text-slate-300 text-slate-700" />
    </PopoverButton>
    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverOverlay class="fixed inset-0 dark:bg-slate-300/75 ring-1 ring-black ring-opacity-5 drop-shadow-2xl shadow-lg" @click="resetSwitches()"/>
    </transition>
    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel v-slot="{ close }" class="text-xs md:text-base absolute inset-x-0 top-full mt-4 origin-top rounded-2xl bg-white text-slate-700 dark:bg-slate-700 dark:text-slate-300 p-4 text-lg tracking-tight shadow-xl ring-1 ring-slate-700/5">
        <div v-if="languageSwitchOpen">
          <HeaderMobileSwitchLanguage @toggle-switch-language="toggleSwitchLanguage" @close="close()"/>
        </div>
        <div v-else-if="themeSwitchOpen">
          <HeaderMobileSwitchTheme @toggle-switch-theme="toggleSwitchTheme" @close="close()"/>
        </div>
        <div v-else class="flex flex-col">
          <HeaderMobileLinks :links="links" @close="close()"/>
          <BaseLine />
          <HeaderMobileActions 
            @toggle-switch-language="toggleSwitchLanguage"
            @toggle-switch-theme="toggleSwitchTheme"
            @close="close()"
          />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'

import { ref } from 'vue'

import { PropsHeaderLink } from "~/types/PropsHeaderLink";

import HeaderMobileSwitchLanguage from "./HeaderMobileSwitchLanguage.vue"
import HeaderMobileSwitchTheme from "./HeaderMobileSwitchTheme.vue"
import HeaderMobileLinks from "./HeaderMobileLinks.vue"
import HeaderMobileActions from "./HeaderMobileActions.vue"

interface Props {
  links: PropsHeaderLink[];
}

defineProps<Props>();

const languageSwitchOpen = ref(false)
const themeSwitchOpen = ref(false)

function toggleSwitchLanguage() {
  languageSwitchOpen.value = !languageSwitchOpen.value
}

function toggleSwitchTheme() {
  themeSwitchOpen.value = !themeSwitchOpen.value
}

function resetSwitches() {
  languageSwitchOpen.value = false
  themeSwitchOpen.value = false
}
</script>
