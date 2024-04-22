// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUoU1Lv5KwlFUjqvXhnofSf2mwBhUgcCI",
  authDomain: "real-estate-project-ec17b.firebaseapp.com",
  projectId: "real-estate-project-ec17b",
  storageBucket: "real-estate-project-ec17b.appspot.com",
  messagingSenderId: "104471238905",
  appId: "1:104471238905:web:345fd0c6f3056dbaa1ea28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
