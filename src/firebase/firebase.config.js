// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCioVRWlShkzzA_RcYF8KKug6SbCnfSZTw",
  authDomain: "skillshare-authentication.firebaseapp.com",
  projectId: "skillshare-authentication",
  storageBucket: "skillshare-authentication.appspot.com",
  messagingSenderId: "346873346365",
  appId: "1:346873346365:web:ed4022ca0bf72d02fd2d54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
