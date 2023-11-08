<template>
  <div class="profile-popup">
    <div class="user">
      <span>User</span>
      <span>{{ user?.displayName }}</span>
    </div>
    <LogoutButton @click="$emit('logout')" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { type Auth } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";
import LogoutButton from "@/components/auth/LogoutButton.vue";

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

defineEmits<{
  (e: "logout"): void;
}>();
const { user } = useAuth(auth);
</script>

<style lang="stylus" scoped>
.profile-popup
  display flex
  flex-flow column nowrap
  min-width 240px
  padding 18px 12px 16px
  box-shadow var(--shadow-3)
  justify-content center
  background-color var(--c-bg-alt)
  border-color var(--c-border)
  .user
    display flex
    justify-content space-between
    padding 0 0.25rem 0.5rem
    & > *:first-child
      font-weight 500
  button
    line-height 2rem
    font-size 1rem
    margin 0.25rem 0
    padding 0.25rem 5rem
    background-color var(--c-bg)
    border-radius 0.3rem
    box-shadow var(--shadow-1)
    border 1px solid var(--c-border)
    cursor pointer
</style>
