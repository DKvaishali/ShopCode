// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_R3ijOTxadn-w_vLOp9N11TGoMbhkB_s",
  authDomain: "shopcode-5e687.firebaseapp.com",
  projectId: "shopcode-5e687",
  storageBucket: "shopcode-5e687.appspot.com",
  messagingSenderId: "665121308781",
  appId: "1:665121308781:web:e2db590d32e01f7df5bf64",
  measurementId: "G-61V28JKSH3"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;
// const analytics = getAnalytics(app);