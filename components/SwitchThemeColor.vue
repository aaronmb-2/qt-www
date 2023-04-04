<template>
  <BaseSwitch
    :item-current="themeColorService.getTheme()"
    :item-list="themeColorService.themes"
    @item-clicked="setTheme"
  />
</template>

<script setup lang="ts">
import BaseSwitch from "./base/BaseSwitch.vue";

import { IBaseSwitchItem } from "~/models/base/IBaseSwitchItem";
import { themeColorService } from "~/services/theme/ThemeColorService";

function setTheme(item: IBaseSwitchItem) {
  if (!item.mode) {
    return;
  }
  themeColorService.setTheme(item.mode);
}
</script>
