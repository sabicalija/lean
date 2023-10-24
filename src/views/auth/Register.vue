<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="register">Register</button>
    <OAuthButtons />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import OAuthButtons from "@/components/auth/OAuthButtons.vue";

const email = ref("");
const password = ref("");

const register = async () => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email.value, password.value);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Registration Failed:", error.message);
    }
  }
};
</script>
