import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const removeUser = (auth, user) => {
        setLoading(true);
        return deleteUser(auth, user);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => unSubscribe;
    }, [])

    const info = {
        createUser,
        signIn,
        logOut,
        loading,
        removeUser,
        user
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;