<template>
  <router-link class="navbar-content" to="/log">Log</router-link>
  <router-link class="navbar-content" to="/analysis">Analysis</router-link>
  <router-link class="navbar-content" to="/profile">Profile</router-link>
</template>

<script lang="ts" setup></script>

<style lang="stylus" scoped>
a.navbar-content
  height calc(var(--nav-height) - 1px)
  display flex
  align-items center
</style>
