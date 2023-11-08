<template>
  <div class="oauth">
    <button @click="loginWithGoogle">
      <font-awesome-icon :icon="['fab', 'google']" size="sm"></font-awesome-icon>
      Login with Google
    </button>
    <button @click="loginWithGithub">
      <font-awesome-icon :icon="['fab', 'github']" size="sm"></font-awesome-icon>
      Login with GitHub
    </button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { Auth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import router from "@/plugins/router";
// import { Auth, signInWithRedirect, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const auth = inject<Auth>("auth");

if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const loginWithGoogle = async () => {
  await signInWithPopup(auth, new GoogleAuthProvider());
  router.push("/");
};
const loginWithGithub = () => signInWithPopup(auth, new GithubAuthProvider());

// const loginWithGoogle = () => signInWithRedirect(auth, new GoogleAuthProvider());
// const loginWithGithub = () => signInWithRedirect(auth, new GithubAuthProvider());
</script>

<style lang="stylus" scoped>
.oauth
  display flex
  flex-flow column nowrap
  button
    line-height 2rem
    font-size 1.2rem
    margin 0.25rem 0
    padding 0.25rem 5rem
    background-color var(--c-bg)
    border-radius 0.3rem
    box-shadow var(--shadow-1)
    border 1px solid var(--c-border)
    min-width 340px
    cursor pointer
</style>
