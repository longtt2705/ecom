import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH7H78dpxDkzHvDobIMZ5yqf4UifmZ3Zc",
  authDomain: "dental-clinic-42d42.firebaseapp.com",
  projectId: "dental-clinic-42d42",
  storageBucket: "dental-clinic-42d42.appspot.com",
  messagingSenderId: "198473856880",
  appId: "1:198473856880:web:06a54e8ec6336c5d12c1b5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getFirestore(app);

export default { app, analytics, auth, database };
