<template>
    <p>Theme Selector</p>
  <div class="hidden md:block">
    <HeaderLink text="Sign in" to="/sign-in" />
  </div>
  <button href="/register">
    <span> Get started <span class="hidden lg:inline">today</span> </span>
  </button>
</template>

<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue"
</script>
