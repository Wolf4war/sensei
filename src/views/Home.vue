<template>
  <div class="flex flex-1 justify-between mx-auto p-5">
    <h1 class="font-bold text-5xl">Home</h1>
    <div class="flex gap-5 text-xl">
      <button @click="goToLogin()">Login</button>
      <button @click="goToRegister()">Register</button>
    </div>
  </div>
</template>

<script>
import router from "../plugin/router";
export default {
  setup() {
    return {};
  },
  methods: {
    goToLogin() {
      router.push("/login");
    },
    goToRegister() {
      router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped></style>
