import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb65AZfOcElbRIrXuYbkqOucWJ5_Lh2Dk",
  authDomain: "photoshop-fe98b.firebaseapp.com",
  projectId: "photoshop-fe98b",
  storageBucket: "photoshop-fe98b.appspot.com",
  messagingSenderId: "705971571653",
  appId: "1:705971571653:web:ad7d3426d9765b18d9d9ac",
  measurementId: "G-FQZTB533JP"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();