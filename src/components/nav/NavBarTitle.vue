<template>
  <div class="navbar-title">
    <router-link to="/" class="title">
      <font-awesome-icon icon="location-arrow" class="icon"></font-awesome-icon>
      Lean
    </router-link>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="stylus">
.title
  display flex
  align-items center
  border-bottom 1px solid transparent
  height var(--nav-height)
  font-size 16px
  font-weight 600
  color var(--c-text-1)
  transisition opacity 0.25s
.icon
  padding-right 0.4rem
</style>
