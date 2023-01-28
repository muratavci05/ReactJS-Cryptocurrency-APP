import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";
import { getAuth } from "firebase/auth";

const firebaseApp = initalizeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db};

