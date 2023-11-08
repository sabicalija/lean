<template>
  <!-- <router-link to="/login">Login</router-link> -->
  <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
  <LogoutButton class="logout" v-else />
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { type Auth } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";
import LogoutButton from "@/components/auth/LogoutButton.vue";

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebae Auth is not provided");
}

const { isAuthenticated } = useAuth(auth);
</script>

<script lang="stylus"></script>

<style lang="stylus" scoped>
.logout
  background-color unset
  color inherit
  font-size inherit
  border unset
  font-family inherit
</style>
