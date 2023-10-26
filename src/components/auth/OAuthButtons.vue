<template>
  <div>
    <button @click="loginWithGoogle">Login with Google</button>
    <button @click="loginWithGithub">Login with GitHub</button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { Auth, signInWithRedirect, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const auth = inject<Auth>("auth");

if (!auth) {
  throw new Error("Firebase Auth is not provided");
}

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const loginWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithRedirect(auth, provider);
};
</script>
