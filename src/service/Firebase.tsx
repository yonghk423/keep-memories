import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {  
  storageBucket: "photoshop-fe98b.appspot.com",  
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();