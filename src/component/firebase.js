// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOXxbCb7wzkpXY9BgFHrb39AyRMeprcGY",
  authDomain: "phone-otp-50e55.firebaseapp.com",
  projectId: "phone-otp-50e55",
  storageBucket: "phone-otp-50e55.appspot.com",
  messagingSenderId: "363237621495",
  appId: "1:363237621495:web:a19bacfcd274c250831df2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Before initialization");
console.log("Initialized App:", app);
console.log("After initialization");

const authentication = getAuth(app);
export default authentication;
