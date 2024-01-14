// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPuWk9eJj2epGIU6IJdlqwn08s-MYZkAw",
  authDomain: "my-netflix-c7159.firebaseapp.com",
  projectId: "my-netflix-c7159",
  storageBucket: "my-netflix-c7159.appspot.com",
  messagingSenderId: "658867041264",
  appId: "1:658867041264:web:cc88ad71f8dd9b59bd6335",
  measurementId: "G-RHNMF98NVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);