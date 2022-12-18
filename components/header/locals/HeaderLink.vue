<template>
    <NuxtLink :to="to" class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
       {{ text }} 
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    text: string;
    to: string;
}

defineProps<Props>();
</script>
