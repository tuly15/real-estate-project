
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
