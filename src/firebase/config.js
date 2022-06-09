
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcc2Nmic61ICdz__G6ZHf-9q4G-Rz9W0M",
  authDomain: "crossfitperdomo-f15cd.firebaseapp.com",
  projectId: "crossfitperdomo-f15cd",
  storageBucket: "crossfitperdomo-f15cd.appspot.com",
  messagingSenderId: "378587412586",
  appId: "1:378587412586:web:e56bd2653ec91f1b203213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}