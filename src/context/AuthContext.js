import { auth } from 'firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const signInUser = async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider);
    };

    const signOutUser = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ signInUser, signOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
