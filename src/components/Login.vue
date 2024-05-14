<template>
  <div class="p-5">
    <h2 class="text-2xl">Login</h2>
    <form @submit.prevent class="flex flex-1 justify-between mt-6">
      <!-- Error Message -->
      <span class="text-black text-sm font-bold"> {{ errMsg }}</span>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="Login()" type="submit">Login</button>
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
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    Login: function () {
      if (this.email == "" || this.password == "") {
        this.errMsg = "Please fill in all fields";
        this.onError = true;
      } else {
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((data) => {
            console.log("Successfully logged in!");
            router.push("/dashboard");
          })
          .catch((error) => {
            this.onError = true;
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                this.errMsg = "Invalid email";
                break;
              case "auth/user-not-found":
                this.errMsg = "No account under that email was found";
                break;
              case "auth/wrong-password":
                this.errMsg = "Incorrect password";
                break;
              case "auth/invalid-email":
                this.errMsg = "Invalid email";
                break;
              default:
                this.errMsg = "Email or password was incorrect";
                break;
            }
          });
      }
    },
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
