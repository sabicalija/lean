<template>
  <header class="menu">
    <NavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <NavScreen :open="isScreenOpen" />
  </header>
</template>

<script lang="ts" setup>
import { useNav } from "@/composables/nav.ts";
import NavBar from "@/components/nav/NavBar.vue";
import NavScreen from "@/components/nav/NavScreen.vue";

const { isScreenOpen, toggleScreen } = useNav();
</script>
