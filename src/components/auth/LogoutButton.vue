<template>
  <button @click="logout">Logout</button>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import { Auth } from "firebase/auth";

const router = useRouter();
const auth = inject<Auth>("auth");

if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const logout = async () => {
  try {
    await auth.signOut();
    router.push("/login");
  } catch (error) {
    console.error("Logout Failed:", error);
  }
};
</script>
