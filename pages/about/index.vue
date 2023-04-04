<template>
  <div class="relative isolate">
    <!-- Background -->
    <BaseBackground />

    <!-- Header section -->
    <AboutHeader />
    <!-- Content section -->
    <AboutContent />

    <!-- Values section -->
    <AboutValues />

    <!-- CTA section -->
    <AboutCTA />
  </div>
</template>

<script setup lang="ts">
import AboutCTA from "./components/AboutCTA.vue";
import AboutHeader from "./components/AboutHeader.vue";
import AboutContent from "./components/AboutContent.vue";
import AboutValues from "./components/AboutValues.vue";
</script>
