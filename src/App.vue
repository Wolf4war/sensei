<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "./plugin/router";

export default {
  setup() {
    return {};
  },
  mounted() {
    this.AuthCheck();
  },
  methods: {
    AuthCheck() {
      let auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.email);
        } else {
          alert("No one is logged in");
          router.push("/");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
