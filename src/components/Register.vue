<template>
  <div class="p-5">
    <h2 class="text-2xl">Register</h2>
    <form @submit.prevent="register" class="flex flex-1 justify-between mt-6">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    <div class="flex flex-1 mt-8 justify-around">
      <button @click="goToHome()">Home</button>
      <button @click="goToLogin()">Login</button>
    </div>
  </div>
</template>

<script>
import router from "../plugin/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    return {};
  },
  methods: {
    goToHome() {
      router.push("/");
    },
    goToLogin() {
      router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
