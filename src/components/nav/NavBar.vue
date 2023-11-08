<template>
  <div class="navbar">
    <div class="container">
      <div class="title">
        <NavBarTitle />
      </div>
      <div class="content">
        <NavBarContent />
        <NavBarAppearance />
        <NavBarLogin />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBarTitle from "@/components/nav/NavBarTitle.vue";
import NavBarContent from "@/components/nav/NavBarContent.vue";
import NavBarAppearance from "@/components/nav/NavBarAppearance.vue";
import NavBarLogin from "@/components/nav/NavBarLogin.vue";

defineProps<{
  isScreenOpen: boolean;
}>();

defineEmits<{
  (e: "toggle-screen"): void;
}>();
</script>

<style lang="stylus">
.navbar
  position relative
  border-bottom 1px solid transparent
  padding 0 8px 0 24px
  height var(--nav-height)
  pointer-events none
  white-space nowrap

@media (min-width 768px)
  .navbar
    padding 0 32px

@media (min-width 960px)
  .navbar.has-sidebar
    padding 0
  .navbar:not(.has-sidebar):not(.top)
    border-bottom-color var(--c-gutter)
    background-color var(--nav-bg-color)

.container
  display flex
  justify-content space-between
  margin 0 auto
  max-width calc(var(--layout-max-width) - 64px)
  height var(--nav-height)
  pointer-events none
  & > .title, & > .content
    pointer-events none

.container *
  pointer-events auto

.title
  flex-shrink 0
  height calc(var(--nav-height) - 1px)
  transition background-color 0.5s

.content
  display flex
  justify-content flex-end
  align-items center
  height calc(var(--nav-height) - 1px)
  transition background-color 0.5s

.content > *
  padding 0 0.25rem
</style>
