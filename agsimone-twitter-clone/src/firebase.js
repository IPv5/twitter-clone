import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtg0LoV6oT9wyGfDAu35_O_IFJkTP3zhs",
    authDomain: "agsimone-twitter-clone.firebaseapp.com",
    databaseURL: "https://agsimone-twitter-clone.firebaseio.com",
    projectId: "agsimone-twitter-clone",
    storageBucket: "agsimone-twitter-clone.appspot.com",
    messagingSenderId: "170510389837",
    appId: "1:170510389837:web:898cecc56db1a1f4f38204",
    measurementId: "G-9KD3BNGWR4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;