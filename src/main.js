import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./plugin/router.js";
import { firebaseConfig } from "./firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";

export const firebaseInit = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const auth = getAuth();

const app = createApp(App).use(router).mount("#app");
