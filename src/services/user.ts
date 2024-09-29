// src/firebaseFirestore.ts
import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from '../app/firebase';

// Function to fetch user data
export const fetchUserData = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(firebase.database, "users", userId));

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};

export const storeUserData = async (userId: string, additionalData: object) => {
  try {
    await setDoc(doc(firebase.database, "users", userId), additionalData, { merge: true });
  } catch (error) {
    console.error("Error writing user data: ", error);
    throw error;
  }
};