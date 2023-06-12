import firebase from "firebase/app"
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAYSM0IGfKg7KUNxcoSVPzsmeBkJW8zprw",
  authDomain: "tarefas-af5af.firebaseapp.com",
  projectId: "tarefas-af5af",
  storageBucket: "tarefas-af5af.appspot.com",
  messagingSenderId: "173969301540",
  appId: "1:173969301540:web:0f1436580eaf980c0278b1"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database