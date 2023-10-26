<!-- src/views/auth/Profile.vue -->
<template>
  <div>
    <p>Email: {{ user?.email }}</p>
    <p>Name: {{ user?.displayName }}</p>
    <!-- other user info -->
    <LogoutButton />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from "vue";
import LogoutButton from "@/components/auth/LogoutButton.vue";
import { Auth, User } from "firebase/auth";

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const user = ref<User | null>(auth.currentUser);

onMounted(() => {
  // Optional: Fetch additional user info
});
</script>
