import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyD0AHXbTQI25gTj20oyPHuJoX8t-4AxUK0",
    authDomain: "coffee-drinks.firebaseapp.com",
    projectId: "coffee-drinks",
    storageBucket: "coffee-drinks.appspot.com",
    messagingSenderId: "341085434266",
    appId: "1:341085434266:web:d85f56150efb84424b8a23",
    measurementId: "G-XX7SN7169M"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;