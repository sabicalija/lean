<!-- src/components/Navbar.vue -->
<template>
  <nav>
    <div class="left">
      <div class="home">
        <router-link to="/">Home</router-link>
      </div>
      <div class="features">
        <router-link to="/log">Log</router-link>
        <router-link to="/analysis">Analysis</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
    </div>
    <div class="auth">
      <router-link to="/login">Login</router-link>
      <router-link class="register" to="/register">Register</router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="stylus" scoped>
nav
  display flex
  justify-content space-between
  align-items center
  .left
    display flex
    gap 1rem
  .home, .features, .auth
    display flex
    gap 1rem
  .home > a, .register
    color var(--theme-color-bg)
    background-color var(--theme-color)
    box-shadow var(--box-shadow)
</style>
