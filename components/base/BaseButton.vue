<template>
    <button :class="buttonTheme.getTailwindClass()">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { IThemeButton } from '~/models/theme/IThemeButton';

interface Props {
    buttonTheme: IThemeButton 
}

const p = defineProps<Props>();
console.log(p.buttonTheme.getTailwindClass())
</script>
