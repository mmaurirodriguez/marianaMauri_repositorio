import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRzkKg77_7StAmfXkvBbseXtt_rnX4HTQ",
  authDomain: "practicamarianamauri.firebaseapp.com",
  projectId: "practicamarianamauri",
  storageBucket: "practicamarianamauri.firebasestorage.app",
  messagingSenderId: "828371607380",
  appId: "1:828371607380:web:fbf3b23121a9e03bbcf2c1"
};


app.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();

export const serverTimestamp = app.firestore.FieldValue.serverTimestamp;