import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYfM6gURZHKQO69g3oGW9nmIl95yZMFSc",
    authDomain: "whatsapp-1c75a.firebaseapp.com",
    databaseURL: "https://whatsapp-1c75a.firebaseio.com",
    projectId: "whatsapp-1c75a",
    storageBucket: "whatsapp-1c75a.appspot.com",
    messagingSenderId: "59322468393",
    appId: "1:59322468393:web:92bee567c11193fc59f438",
    measurementId: "G-3JSBJGP0CS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

