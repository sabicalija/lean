<!-- src/views/auth/Profile.vue -->
<template>
  <div>
    <p>Email: {{ user?.email }}</p>
    <p>Name: {{ user?.displayName }}</p>
    <!-- other user info -->
    <LogoutButton />
  </div>
</template>

<script lang="ts">
import { auth } from "@/plugins/firebase.ts";
import { ref, onMounted } from "vue";
import LogoutButton from "@/components/auth/LogoutButton.vue";

export default {
  components: {
    LogoutButton,
  },
  setup() {
    const user = ref(auth.currentUser);

    onMounted(() => {
      // Optional: Fetch additional user info
    });

    return { user };
  },
};
</script>
