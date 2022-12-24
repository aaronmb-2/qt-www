<template>
    <button :class="p.buttonTheme.getTailwindClass()">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
/**
 * Base component for creating and styling a button.
 *
 * @remarks
 * This component is a so called "Base" component, which applies QuantTrade specific styling through the params.
 * The slot can be used for any type of content, for example; a simple <p> tag for some text or a <NuxtLink> for navigation.
 * 
 * @param IThemeButton - The implemented version af a ThemeButton, because we use the .getTailwindClass method inside of the component.
 * @returns A fully styled button based on the styling provided through the params.
 * 
 */
import type { IThemeButton } from '~/models/theme/IThemeButton';

interface Props {
    buttonTheme: IThemeButton 
}

const p = defineProps<Props>();
// inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900
// inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900
console.log(p.buttonTheme.getTailwindClass())
</script>
