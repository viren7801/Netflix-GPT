// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sOzd2kmS8y7anNLuTUW3ZHvUKiXXbk4",
  authDomain: "netflixgpt-7f599.firebaseapp.com",
  projectId: "netflixgpt-7f599",
  storageBucket: "netflixgpt-7f599.appspot.com",
  messagingSenderId: "954742345102",
  appId: "1:954742345102:web:f49d9a5a9bc9e778a068df",
  measurementId: "G-674CL9N8NJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
