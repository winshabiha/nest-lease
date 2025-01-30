import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { useState } from 'react';

export const authContext = createContext(null) 
const AuthProvider = ({children}) => {

    const auth = getAuth(app)

    const [user, setUser] = useState("string")

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        })
        return ()=>{
            unsubscribed();
        }
        },[])

    const authInfo = {
        createUser,
        login,
        logOut,
        user,
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;