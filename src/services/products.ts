// src/firebaseFirestore.ts
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import firebase from '../app/firebase';
import { CartItem } from "../slices/cart";

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

export const purchaseProducts = async (userId: string, additionalData: object) => addDoc(collection(firebase.database, `orders-${userId}`), additionalData);

export const getOrders = async (userId: string) => {
  const q = query(
    collection(firebase.database, `orders-${userId}`),
    orderBy('createdAt', 'desc')
  );
  const data = await getDocs(q);
  return data.docs.map((document) => ({
    id: document.id, ...(document.data() as {
      email: string,
      phone: string,
      firstName: string,
      lastName: string,
      address: string,
      items: string,
      totalAmount: number,
      totalQuantity: number,
      createdAt: string
      cartItems: CartItem[]
    })
  }));
};