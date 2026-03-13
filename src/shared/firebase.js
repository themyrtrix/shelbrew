import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIIpE5bXUUQ_WXjh6Zs2yeWsq4RFetuLA",
  authDomain: "shelbrew-database.firebaseapp.com",
  databaseURL: "https://shelbrew-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "shelbrew-database",
  storageBucket: "shelbrew-database.firebasestorage.app",
  messagingSenderId: "69905681906",
  appId: "1:69905681906:web:c092c6eb88568dbc31af6b",
  measurementId: "G-T2614EFDK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const  db = getFirestore(app);