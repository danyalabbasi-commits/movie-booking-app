import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK7LpGYNC-v3xKP10uQKH-d78qHrQDH0g",
  authDomain: "exp-10-6c82c.firebaseapp.com",
  projectId: "exp-10-6c82c",
  storageBucket: "exp-10-6c82c.firebasestorage.app",
  messagingSenderId: "1017839048328",
  appId: "1-1017839048328-web-9443a3dd0f554ac768aca5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);