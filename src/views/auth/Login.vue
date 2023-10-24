<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
    <OAuthButtons />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import OAuthButtons from "@/components/auth/OAuthButtons.vue";

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login Failed:", error.message);
    }
  }
};
</script>
