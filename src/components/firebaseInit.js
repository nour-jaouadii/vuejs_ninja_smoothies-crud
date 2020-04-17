import firebase from 'firebase'
import 'firebase/firestore' 
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

   
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
 

