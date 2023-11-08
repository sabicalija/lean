<template>
  <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
  <NavBarProfile v-else @click.stop="togglePopup" />
  <ProfilePopup ref="popup" class="popup" v-if="displayPopup" @logout="hidePopup" />
</template>

<script lang="ts" setup>
import { ref, inject, onUnmounted } from "vue";
import { type Auth } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";
import NavBarProfile from "@/components/nav/NavBarProfile.vue";
import ProfilePopup from "@/components/ProfilePopup.vue";

const popup = ref<InstanceType<typeof ProfilePopup> | null>(null);
const displayPopup = ref(false);

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const togglePopupOnce = (e: Event) => {
  if (!popup.value?.$el.contains(e.target)) {
    hidePopup();
  }
};

const hidePopup = () => {
  displayPopup.value = false;
  document.removeEventListener("click", togglePopupOnce);
};

const togglePopup = () => {
  displayPopup.value = !displayPopup.value;
  if (displayPopup.value) {
    document.addEventListener("click", togglePopupOnce);
  }
};

onUnmounted(() => document.removeEventListener("click", togglePopupOnce));

const { isAuthenticated } = useAuth(auth);
</script>

<script lang="ts" setup></script>

<style lang="stylus" scoped>
.popup
  position absolute
  top calc(var(--nav-height) + 1px)
  right 32px
</style>
