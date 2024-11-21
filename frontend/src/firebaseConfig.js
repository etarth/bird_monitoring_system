// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAPifGuYhyBkuKw6al3EiVjOj3qqIhz5QY",
  authDomain: "bird-monitoring-system.firebaseapp.com",
  databaseURL: "https://bird-monitoring-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bird-monitoring-system",
  storageBucket: "bird-monitoring-system.firebasestorage.app",
  messagingSenderId: "92109517715",
  appId: "1:92109517715:web:066fa25b7d8f33f9cc2e66",
  measurementId: "G-R4ZHQETDY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get the database instance

export { database };
