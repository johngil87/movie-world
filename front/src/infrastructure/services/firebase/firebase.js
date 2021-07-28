import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCODn2-Da9PdQ7pa0E02Q0YzRq9CyQXVGg",
    authDomain: "movie-world-4de5f.firebaseapp.com",
    projectId: "movie-world-4de5f",
    storageBucket: "movie-world-4de5f.appspot.com",
    messagingSenderId: "988564781224",
    appId: "1:988564781224:web:34a2146a9f5ec2fe24aa9d",
    measurementId: "G-W7KXTDVZKE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const firestore = firebase.firestore;