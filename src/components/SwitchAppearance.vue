<template>
  <Switch title="toggle dark mode" class="switch-appearance" :aria-checked="isDark" @click="toggleAppearance">
    <IconSun class="sun" />
    <IconMoon class="moon" />
  </Switch>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { useDark } from "@vueuse/core";
import Switch from "@/components/Switch.vue";
import IconSun from "@/components/IconSun.vue";
import IconMoon from "@/components/IconMoon.vue";

const isDark = useDark();

const toggleAppearance = inject("toggle-appearance", () => {
  isDark.value = !isDark.value;
});
</script>

<style lang="stylus">
.sun
  opacity 1
.moon
  opacity 0
.dark
  .sun
    opacity 0
  .moon
    opacity 1
.dark .switch-appearance .check
  transform translateX(18px)
</style>
