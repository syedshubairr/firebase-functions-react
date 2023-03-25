import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCwSLQU6DV1JCiK5Z0rDLnHT9-XAB6Yizg",
  authDomain: "reactapp-firebase-35558.firebaseapp.com",
  projectId: "reactapp-firebase-35558",
  storageBucket: "reactapp-firebase-35558.appspot.com",
  messagingSenderId: "541561187667",
  appId: "1:541561187667:web:130e96aa715e4e49f685a6",
  databaseURL:"https://reactapp-firebase-35558-default-rtdb.firebaseio.com",
};
export const app = initializeApp(firebaseConfig);