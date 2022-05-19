import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBV-aKTmr_b2S-tNZZRa74W5OIQk2YbzJA",
 authDomain: "prueba31110.firebaseapp.com",
 projectId: "prueba31110",
 storageBucket: "prueba31110.appspot.com",
 messagingSenderId: "761817720556",
 appId: "1:761817720556:web:b688df42fcd7fb5734a7c9"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

