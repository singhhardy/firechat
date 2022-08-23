import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZgVJPc6MT3ApYTmr1H3VYJ8F07t50Raw",
    authDomain: "firechat-484da.firebaseapp.com",
    projectId: "firechat-484da",
    storageBucket: "firechat-484da.appspot.com",
    messagingSenderId: "1040866509218",
    appId: "1:1040866509218:web:41a841be19ac1a5e57b2fb",
    measurementId: "G-RLQC1NPDSH"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };