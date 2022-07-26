import { db } from 'firebase-config';
import {
    arrayRemove,
    arrayUnion,
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore';

const DB_ERROR_MESSAGES = {
    query: 'Could not get your cart items from the database',
    add: 'Could not add item to database',
    remove: 'Could not remove item from database',
    update: 'Could not update item in database',
};

let usersRef = null;
export const setUsersRef = (docId) => {
    usersRef = doc(db, 'users', docId);
};

export const queryUserData = async (user) => {
    try {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        return await getDocs(q);
    } catch {
        throw new Error(DB_ERROR_MESSAGES.query);
    }
};

export const addItemToDb = async (item) => {
    try {
        await updateDoc(usersRef, {
            cartItems: arrayUnion(item),
        });
    } catch {
        throw new Error(DB_ERROR_MESSAGES.add);
    }
};

export const removeItemFromDb = async (itemToRemove) => {
    try {
        await updateDoc(usersRef, {
            cartItems: arrayRemove(itemToRemove),
        });
    } catch {
        throw new Error(DB_ERROR_MESSAGES.remove);
    }
};

/**
 * Firestore doesn't provide a way to specifically edit an object field contained in an array field.
 * The only way to update an array item is to replace the old array with a new one containing the new data.
 */
export const updateDbItem = async (user, itemId, item) => {
    try {
        const itemsRef = (await queryUserData(user)).docs[0].data().cartItems;
        const itemToUpdate = itemsRef.find((item) => item.id === itemId);
        itemsRef[itemsRef.indexOf(itemToUpdate)] = item;

        await updateDoc(usersRef, {
            cartItems: itemsRef,
        });
    } catch {
        throw new Error(DB_ERROR_MESSAGES.update);
    }
};
