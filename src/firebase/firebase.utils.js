import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: process?.env?.VUE_APP_API_KEY || '',
    authDomain: "drinks-coffee.firebaseapp.com",
    projectId: "drinks-coffee",
    storageBucket: "drinks-coffee.appspot.com",
    messagingSenderId: "53384248519",
    appId: "1:53384248519:web:e7efad15a1054a0b2dd2e2",
    measurementId: "G-42B1W9ZEQF"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;