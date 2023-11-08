<template>
  <div class="login">
    <h1>Login</h1>
    <div class="sso">
      <OAuthButtons />
    </div>
    <div class="input">
      <form @submit.prevent>
        <input v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
      </form>
      <button @click="login">Login</button>
    </div>
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

<style lang="stylus" scoped>
.login
  width 100%
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  h1
    line-height 3rem
    font-size 3rem
    width 100%
    text-align center
    margin-block-start 5rem
.sso
  padding-bottom 1rem
  border-bottom 1px solid var(--c-border)
  margin 0 0 1rem 0
.input
  display flex
  flex-flow column nowrap
  input
    line-height 1.4
    font-size 1rem
    display block
    margin 0.4rem auto
    min-width 340px
  button
    line-height 2rem
    font-size 1.2rem
    margin 0.25rem 0
    padding 0.25rem 5rem
    background-color var(--c-bg)
    border-radius 0.3rem
    box-shadow var(--shadow-2)
    border 1px solid var(--c-border)
    min-width 340px
    cursor pointer
</style>
