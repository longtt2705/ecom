import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  reauthenticateWithCredential,
  updatePassword,
  User
} from 'firebase/auth';
import firebase from '../app/firebase';
import { EmailAuthProvider } from 'firebase/auth/web-extension';

const auth = firebase.auth;

export const signIn = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const signUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

export const changePassword = async (user: User, oldPassword: string, password: string) => {
  const credential = EmailAuthProvider.credential(user.email || '', oldPassword);
  try {
    await reauthenticateWithCredential(user, credential);
  } catch (error) {
    throw new Error('Mật khẩu cũ không đúng');
  }
  await updatePassword(user, password);
};

export const signOut = () => firebaseSignOut(auth);


