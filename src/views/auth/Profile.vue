<!-- src/views/auth/Profile.vue -->
<template>
  <img :src="user?.providerData[0]?.photoURL || ''" alt="User profile picture" />
  <ul>
    <li>E-Mail: {{ user?.email }}</li>
    <li>Name: {{ user?.displayName }}</li>
  </ul>
  <pre>{{ user }}</pre>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { Auth } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const { user } = useAuth(auth);
</script>

<style lang="stylus" scoped>
pre
  margin 1rem
</style>
