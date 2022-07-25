import { auth, db } from 'firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { createContext } from 'react';
import { queryUserData } from 'utils/firestoreFunctions';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const signInUser = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            const user = response.user;
            const isNewUser = (await queryUserData(user)).empty;
            if (isNewUser) {
                await addDoc(collection(db, 'users'), {
                    createdAt: serverTimestamp(),
                    uid: user.uid,
                    cartItems: [],
                });
            }
        } catch (err) {
            console.error('Error signing in with popup', err);
        }
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
