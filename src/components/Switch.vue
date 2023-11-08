<template>
  <button class="switch" type="button" role="switch">
    <span class="check">
      <span class="icon">
        <slot />
      </span>
    </span>
  </button>
</template>

<style lang="stylus" scoped>
.switch
  position relative
  border-radius 11px
  display block
  width 40px
  height 22px
  flex-shrink 0
  border 1px solid var(--input-border-color)
  background-color var(--input-switch-bg-color)
  &:hover
    border-color var(--c-brand-1)
.check
  position absolute
  top 1px
  left 1px
  width 18px
  height 18px
  border-radius 50%
  background-color var(--c-neutral-inverse)
  box-shadow var(--shadow-1)
  transition transform 0.25s !important
.icon
  position relative
  display block
  width 18px
  height 18px
  border-radius 50%
  overflow hidden
.icon :deep(svg)
  position absolute
  top 3px
  left 3px
  width 12px
  height 12px
  fill var(--c-text-2)
.dark .icon :deep(svg)
  fill var(--c-text-1)
  transition opacity 0.25s !important
</style>
