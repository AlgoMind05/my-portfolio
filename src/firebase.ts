import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcwUtI9k5mQ47qnuTNTrO58almbxFhohk",
  authDomain: "teofil-sinicki-portfolio.firebaseapp.com",
  projectId: "teofil-sinicki-portfolio",
  storageBucket: "teofil-sinicki-portfolio.firebasestorage.app",
  messagingSenderId: "1012899574682",
  appId: "1:1012899574682:web:7e777e82cae7f6d96a8023",
  measurementId: "G-ZX3ZMJMNG6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);