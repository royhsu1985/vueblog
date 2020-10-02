// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    
    authDomain: "royblog-68e34.firebaseapp.com",
    databaseURL: "https://royblog-68e34.firebaseio.com",
    projectId: "royblog-68e34",
    storageBucket: "royblog-68e34.appspot.com",
    messagingSenderId: "828482503332",
    appId: "1:828482503332:web:69013c3edce4712c7ddc31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{ db }