import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAkZCkWgM3_RGPiCvB0greGML2Mu_0-jg",
    authDomain: "brainping-3d64f.firebaseapp.com",
    projectId: "brainping-3d64f",
    storageBucket: "brainping-3d64f.appspot.com",
    messagingSenderId: "373885137427",
    appId: "1:373885137427:web:636a02bdfccf6783bbc5e6"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;