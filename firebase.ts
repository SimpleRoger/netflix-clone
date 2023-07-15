
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJoMLNgcJnM3XSOPsOi40xFO1MZWmLE9s",
  authDomain: "netflix-clone-d2515.firebaseapp.com",
  projectId: "netflix-clone-d2515",
  storageBucket: "netflix-clone-d2515.appspot.com",
  messagingSenderId: "142934280118",
  appId: "1:142934280118:web:1f54ab36040b193857e317",
  measurementId: "G-GSBTH5Q0DB",
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }