// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEteWXPIZA2iDjmhISl1gPee9e1FHRh3Y",
  authDomain: "app-autenticacao-f5414.firebaseapp.com",
  projectId: "app-autenticacao-f5414",
  storageBucket: "app-autenticacao-f5414.appspot.com",
  messagingSenderId: "1065507192365",
  appId: "1:1065507192365:web:7e01afc7489676e0eb02a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
