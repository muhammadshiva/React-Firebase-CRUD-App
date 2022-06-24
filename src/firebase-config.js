import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqfYIZL2jFGBiD48pnQBphKyxgR8QmCzU",
  authDomain: "news-app-1888c.firebaseapp.com",
  projectId: "news-app-1888c",
  storageBucket: "news-app-1888c.appspot.com",
  messagingSenderId: "217569882420",
  appId: "1:217569882420:web:12d37423539b409669b561"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
