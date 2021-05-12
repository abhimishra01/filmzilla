import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAlmKrBAy1l8B93t6MW3qUajBMZvip66cQ",
  authDomain: "filmzilla-5dee3.firebaseapp.com",
  projectId: "filmzilla-5dee3",
  storageBucket: "filmzilla-5dee3.appspot.com",
  messagingSenderId: "866195778907",
  appId: "1:866195778907:web:68f1ccb695c3fb604dfe7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initializing important firebase services to be used in our app 
const fireStore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const google_provider = new firebase.auth.GoogleAuthProvider();
export {auth,timestamp,google_provider};

// this is being exported as default export , coz firestore will come handy in multiple components
export default fireStore;