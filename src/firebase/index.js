// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUk-GuMZtZWJ07z3w8lrIPcUByH0AA0dI",
  authDomain: "lavar-app.firebaseapp.com",
  projectId: "lavar-app",
  storageBucket: "lavar-app.appspot.com",
  messagingSenderId: "865102073709",
  appId: "1:865102073709:web:a66183d81f7f4d3a9f1464",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
