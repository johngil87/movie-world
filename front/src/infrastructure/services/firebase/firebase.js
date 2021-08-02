import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVd6DXNojXziya6aoDGf8aB88pcLX6AH8",
    authDomain: "movieworld-f2d10.firebaseapp.com",
    projectId: "movieworld-f2d10",
    storageBucket: "movieworld-f2d10.appspot.com",
    messagingSenderId: "899929460788",
    appId: "1:899929460788:web:cdb2490a99cee62bfe3a61",
    measurementId: "G-X6Q6HPK2GJ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const firestore = firebase.firestore;