// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyBduQe5OhFBcMsD-qBAJBiUMzMXVp6H6ms",
  // authDomain: "doctors-portal-cb644.firebaseapp.com",
  // projectId: "doctors-portal-cb644",
  // storageBucket: "doctors-portal-cb644.appspot.com",
  // messagingSenderId: "98119685955",
  // appId: "1:98119685955:web:3a34bd42e3160d5ce501f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
