<template>
    <button class="flex justify-between ml-2 mt-2" @click="$emit('toggleSwitchTheme')">
        <ChevronLeftIcon class="h-5 w-5 mt-1" aria-hidden="true" />
    </button>
    <BaseLine />
    <div class="flex flex-col">
        <button 
            @click="setTheme(theme)"
            v-for="theme in themeColorService.themes" 
            :key="theme.name" 
            :value="theme.name"
            :class="[theme === themeColorService.getTheme()? 'bg-pink-100 text-pink-900' : 'text-slate-700 dark:text-slate-300', 'pl-4 my-1 py-1 cursor-pointer relative select-none hover:bg-slate-300 hover:dark:bg-slate-500 rounded-md']">
            {{ theme.name }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import { themeColorService } from "~/services/theme/ThemeColorService";

import { IBaseSwitchItem } from "~/models/base/IBaseSwitchItem";

function setTheme(item: IBaseSwitchItem) {
    if (!item.mode) {
        return;
    }
    themeColorService.setTheme(item.mode)
}
</script>