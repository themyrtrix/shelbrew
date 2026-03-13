import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


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
const analytics = getAnalytics(app);
export const auth = getAuth(app);