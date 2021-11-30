import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAFK1eD-Q_scWEXiQBKiqDCYM0ETD5WJgw",
  authDomain: "niche-bike-project.firebaseapp.com",
  projectId: "niche-bike-project",
  storageBucket: "niche-bike-project.appspot.com",
  messagingSenderId: "649041707043",
  appId: "1:649041707043:web:d0a7f50a55d9eba89db196"
};

const initilizeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initilizeFirebase;
