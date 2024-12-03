// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtWuctOxtzh0y0KQzKXpJyRWfyzRaTUV4",
  authDomain: "elite-state.firebaseapp.com",
  projectId: "elite-state",
  storageBucket: "elite-state.firebasestorage.app",
  messagingSenderId: "134733901174",
  appId: "1:134733901174:web:e3dc542cdb81f68be41e57"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;