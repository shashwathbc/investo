import firebase from "firebase";


const firebaseConfig = {
	apiKey: "AIzaSyCQoVsyxGhKIaTIwwxdRx4RVMM-RaT0rwk",
	authDomain: "investo-e.firebaseapp.com",
	projectId: "investo-e",
	storageBucket: "investo-e.appspot.com",
	messagingSenderId: "1085511590957",
	appId: "1:1085511590957:web:f1f127a0843434980b44a4",
	measurementId: "G-4N5MMKPQEC"
      };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;