import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAA-Y-_VaCjdcCSiv0UrGcyxkQziWiMCz8",
    authDomain: "food-oauth-69f96.firebaseapp.com",
    projectId: "food-oauth-69f96",
    storageBucket: "food-oauth-69f96.appspot.com",
    messagingSenderId: "252058184146",
    appId: "1:252058184146:web:dedf12b96dfbdb0a07400b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
