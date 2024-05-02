<template>
  <div class="p-5">
    <h2 class="text-2xl">Login</h2>
    <form @submit.prevent="login" class="flex flex-1 justify-between mt-6">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <div class="flex flex-1 mt-8 justify-around">
      <button @click="goToHome()">Home</button>
      <button @click="goToRegister()">Register</button>
    </div>
  </div>
</template>

<script>
import router from "../plugin/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    return {};
  },
  methods: {
    goToHome() {
      router.push("/");
    },
    goToRegister() {
      router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped></style>
