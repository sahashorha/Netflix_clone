// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUOQXaZka3lYk_Gx3_rE8mnPniYWWWb_w",
  authDomain: "react-netflix-clone-42cb7.firebaseapp.com",
  projectId: "react-netflix-clone-42cb7",
  storageBucket: "react-netflix-clone-42cb7.appspot.com",
  messagingSenderId: "605783475662",
  appId: "1:605783475662:web:7a74eabcd701e00f72179f",
  measurementId: "G-3DS9SR779J"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 
