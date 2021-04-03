import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDaLTBnbIM1fKIbS5g3L_ENlOPdWiSk5yk",
    authDomain: "hackathonfinal-586b5.firebaseapp.com",
    projectId: "hackathonfinal-586b5",
    storageBucket: "hackathonfinal-586b5.appspot.com",
    messagingSenderId: "68167493881",
    appId: "1:68167493881:web:35c119f0d297215a47da28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const auth=firebase.auth();
  export {db,auth}

