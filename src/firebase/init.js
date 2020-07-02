import firebase from "firebase";
// Your web app's Firebase configuration
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "t4ir-blockchain-testprime.firebaseapp.com",
  databaseURL: "https://t4ir-blockchain-testprime.firebaseio.com",
  projectId: "t4ir-blockchain-testprime",
  storageBucket: "t4ir-blockchain-testprime.appspot.com",
  messagingSenderId: "350660345449",
  appId: "1:350660345449:web:e3bd9365e440cdc1306cf8",
  measurementId: "G-2M1FGCNFFQ",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
