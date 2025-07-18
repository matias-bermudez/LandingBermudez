import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXI8elcDsWq3r_d_4lVqsv5gXwuvXAN3A",
    authDomain: "ecommerce-db-9b2f0.firebaseapp.com",
    projectId: "ecommerce-db-9b2f0",
    storageBucket: "ecommerce-db-9b2f0.firebasestorage.app",
    messagingSenderId: "466406025959",
    appId: "1:466406025959:web:f9e897cd4e266cfb359042"
}

export const app = initializeApp(firebaseConfig)
const db = getFirestore(app);