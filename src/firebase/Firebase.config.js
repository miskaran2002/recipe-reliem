// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyN3gZnNa8YFp3nAcBNTmgV8sZ_ax3d58",
    authDomain: "recipe-realm-4ea1f.firebaseapp.com",
    projectId: "recipe-realm-4ea1f",
    storageBucket: "recipe-realm-4ea1f.firebasestorage.app",
    messagingSenderId: "261461000420",
    appId: "1:261461000420:web:e9b2afbceab15e3dbcecf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;