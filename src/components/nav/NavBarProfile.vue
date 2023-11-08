<template>
  <button>
    <img :src="user?.providerData[0]?.photoURL || ''" alt="" />
  </button>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { type Auth } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";

const auth = inject<Auth>("auth");
if (!auth) {
  throw new Error("Firebae Auth is not provided");
}

const { user } = useAuth(auth);
</script>

<style lang="stylus" scoped>
button
  background-color var(--c-gutter)
  border inherit
  cursor pointer
  width 35px
  img
    box-shadow var(--shadow-1)
    border-radius 50%
    height 2rem
    display flex
</style>
