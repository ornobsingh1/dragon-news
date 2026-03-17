// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyvvd_6WW9n1SDVwfVCbdDEUldOTcDIpM",
  authDomain: "dragon-news-62631.firebaseapp.com",
  projectId: "dragon-news-62631",
  storageBucket: "dragon-news-62631.firebasestorage.app",
  messagingSenderId: "762921463176",
  appId: "1:762921463176:web:455515cc3f92ddc01c5e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
