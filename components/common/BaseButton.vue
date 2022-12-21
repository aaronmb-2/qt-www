<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { IThemeButton } from '~~/models/IThemeButton';

interface Props {
    buttonTheme: IThemeButton 
}

const props = defineProps<Props>();

console.log(props.buttonTheme?.color)
console.log(props.buttonTheme?.size)

/* const computedClass = computed(() => `${props.size} ${props.color}`) */
/* console.log(computedClass.value) */
</script>
