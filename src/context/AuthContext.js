import FloatingErrorAlert from 'components/UI/FloatingErrorAlert';
import { auth, db } from 'firebase-config';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';
import { queryUserData } from 'utils/firestoreFunctions';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const resetError = () => setError(null);

    const signInUser = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response =
                (await signInWithPopup(auth, provider)) ||
                (await signInWithRedirect(auth, provider));
            const user = response.user;
            const isNewUser = (await queryUserData(user)).empty;
            if (isNewUser) {
                await addDoc(collection(db, 'users'), {
                    createdAt: serverTimestamp(),
                    uid: user.uid,
                    cartItems: [],
                });
            }
        } catch {
            setError('Failed to sign in');
        }
    };

    const signOutUser = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ signInUser, signOutUser }}>
            {children}
            <AnimatePresence>
                {error && (
                    <FloatingErrorAlert error={error} closeError={resetError} />
                )}
            </AnimatePresence>
        </AuthContext.Provider>
    );
};
