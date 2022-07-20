import { auth } from 'firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const signOut = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={(signIn, signOut)}>
            {children}
        </AuthContext.Provider>
    );
};
