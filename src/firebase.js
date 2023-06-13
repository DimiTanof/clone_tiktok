// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Nw243ZqSkZ-OfAdZdVTfHhqyMvcUjdc",
  authDomain: "tiktokclone-ee747.firebaseapp.com",
  projectId: "tiktokclone-ee747",
  storageBucket: "tiktokclone-ee747.appspot.com",
  messagingSenderId: "484422063035",
  appId: "1:484422063035:web:bcaa9abd5de26ac9f26a9e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
