<template>
    <p>Theme Selector</p>
  <div class="hidden md:block">
    <HeaderLink text="Sign in" to="/sign-in" />
  </div>
  <BaseButton :button-theme="themeBtnService.getThemeButtonById(1)">
    <span> Get started <span class="hidden lg:inline">today</span> </span>
  </BaseButton>
</template>

<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue"
import BaseButton from "./../../common/BaseButton.vue"
import { themeBtnService } from "~~/services/ThemeBtnService";
</script>
