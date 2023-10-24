<template>
  <button @click="logout">Logout</button>
</template>

<script lang="ts">
import { auth } from "@/plugins/firebase.ts";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const logout = async () => {
      try {
        await auth.signOut();
        router.push("/login");
      } catch (error) {
        console.error("Logout Failed:", error);
      }
    };

    return { logout };
  },
};
</script>
