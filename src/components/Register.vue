<template>
  <div class="flex flex-col p-5">
    <h2 class="text-2xl">Register</h2>
    <form @submit.prevent class="flex flex-1 justify-between mt-6">
      <!-- Error Message -->
      <span class="text-black text-sm font-bold"> {{ errMsg }}</span>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="Register()" type="submmit">Register</button>
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
import { db } from "../main";
export default {
  setup() {
    return {};
  },
  data() {
    return {
      email: "",
      password: "",
      onError: false,
      errMsg: "",
    };
  },
  methods: {
    Register() {
      if (this.email == "" || this.password == "") {
        this.errMsg = "Check the fields.";
        this.onError = true;
      } else {
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(() => {
            this.AddData();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    goToHome() {
      router.push("/");
    },
    goToLogin() {
      router.push("/login");
    },
    AddData: function () {
      // Add a new document in collection "Users"
      db.collection("Users")
        .doc(this.email)
        .set({
          id: this.email,
          Email: this.email,
          Password: this.password,
        })
        .then(() => {
          console.log("Data successfully written.");
          router.push("/dashboard");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
