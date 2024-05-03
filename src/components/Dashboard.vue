<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <button @click="signOut()">Sign Out</button>
  </div>
</template>

<script>
import router from "../plugin/router";
import { getAuth } from "firebase/auth";
export default {
  setup() {
    return {};
  },
  methods: {
    async signOut() {
      var auth = getAuth();

      await auth
        .signOut()
        .then(() => {
          console.log("User signed out");
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
