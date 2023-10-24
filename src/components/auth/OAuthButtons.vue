<template>
  <div>
    <button @click="loginWithGoogle">Login with Google</button>
    <button @click="loginWithGithub">Login with GitHub</button>
  </div>
</template>

<script lang="ts" setup>
import { auth } from "@/plugins/firebase.ts";
import { signInWithRedirect, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const loginWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithRedirect(auth, provider);
};
</script>
