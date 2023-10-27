// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuM9Tw1iVYVCgd2B4Qje9ilhV1uwJHXfI",
  authDomain: "podcast-app-react-rec-95568.firebaseapp.com",
  projectId: "podcast-app-react-rec-95568",
  storageBucket: "podcast-app-react-rec-95568.appspot.com",
  messagingSenderId: "1051609439952",
  appId: "1:1051609439952:web:cc934c54d3354e2b47c8d5",
  measurementId: "G-WZVY6TXS9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };