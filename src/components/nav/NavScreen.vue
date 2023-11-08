<template>
  <div v-if="open"></div>
</template>

<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();
</script>
