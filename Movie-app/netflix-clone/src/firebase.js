import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// const firebaseConfig = {
//   apiKey: "AIzaSyCYdSTLQDize-3mquSg0Wk7MLJqYwvYuFs",
//   authDomain: "netflix-clone-65cb6.firebaseapp.com",
//   projectId: "netflix-clone-65cb6",
//   storageBucket: "netflix-clone-65cb6.firebasestorage.app",
//   messagingSenderId: "961173947346",
//   appId: "1:961173947346:web:b030f16c749d173cc13e0b",
//   measurementId: "G-61W09006Z9"
// };





const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password );
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};