// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWKR688AiRBDuwtBR5cDfVrTMgXesTwxA",
  authDomain: "earthy-shop.firebaseapp.com",
  projectId: "earthy-shop",
  storageBucket: "earthy-shop.appspot.com",
  messagingSenderId: "262052964821",
  appId: "1:262052964821:web:d2201aeeca3fd3cab7f55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;