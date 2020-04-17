import firebase from 'firebase'
import 'firebase/firestore' 

var firebaseConfig = {
  apiKey: "AIzaSyBljVU0vAdR_fgiQRSDUmwSOZa7yHAC3cg",
  authDomain: "ninja-smoothies-67ec1.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-67ec1.firebaseio.com",
  projectId: "ninja-smoothies-67ec1",
  storageBucket: "ninja-smoothies-67ec1.appspot.com",
  messagingSenderId: "408619891736",
  appId: "1:408619891736:web:e3795501dcc1ec06d6d76d",
  measurementId: "G-PFHN7L9HPL"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

   
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();