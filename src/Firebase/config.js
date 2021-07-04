import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAB-FfR2JDgo9b5b3DQVUMEXqiLFrI3c3A",
  authDomain: "project-manager-c083e.firebaseapp.com",
  projectId: "project-manager-c083e",
  storageBucket: "project-manager-c083e.appspot.com",
  messagingSenderId: "149365809751",
  appId: "1:149365809751:web:78f5da12a9940de9bf7912",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuthentication = firebase.auth();

export { projectFirestore, projectAuthentication };
