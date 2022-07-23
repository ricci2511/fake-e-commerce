import useLocalStorage from 'hooks/useLocalStorage';
import { createContext, useEffect, useState } from 'react';
import Cart from 'components/Cart';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from 'firebase-config';
import {
    addDoc,
    collection,
    getDocs,
    serverTimestamp,
    doc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
} from 'firebase/firestore';

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [user] = useAuthState(auth);
    const [cartId, setCartId] = useState('');

    useEffect(() => {
        const loadDbItems = async () => {
            if (user) {
                const q = query(
                    collection(db, 'carts'),
                    where('owner', '==', user.uid)
                );
                const querySnapshot = await getDocs(q);
                // new signed up user
                if (querySnapshot.empty) {
                    return await addDoc(collection(db, 'carts'), {
                        crated: serverTimestamp(),
                        items: [],
                        owner: user.uid,
                    });
                }
                return querySnapshot.forEach((doc) => {
                    setCartItems(doc.data().items);
                    setCartId(doc.id);
                });
            } else {
                setCartItems([]);
            }
        };

        loadDbItems();
    }, [user]);

    const addItemToDb = async (item) => {
        if (!user) return;
        const docRef = doc(db, 'carts', cartId);
        await updateDoc(docRef, {
            items: arrayUnion(item),
        });
    };

    const removeItemFromDb = async (currentItems, itemId) => {
        if (!user) return;
        const docRef = doc(db, 'carts', cartId);
        const itemToRemove = currentItems.find((item) => item.id === itemId);
        await updateDoc(docRef, {
            items: arrayRemove(itemToRemove),
        });
    };

    const updateDbItem = async (itemId, item) => {
        const q = query(
            collection(db, 'carts'),
            where('owner', '==', user.uid)
        );
        const queryData = await getDocs(q);
        let itemsRef = [];
        queryData.forEach((doc) => (itemsRef = doc.data().items));
        const itemToUpdate = itemsRef.find((item) => item.id === itemId);
        itemsRef[itemsRef.indexOf(itemToUpdate)] = item;

        const docRef = doc(db, 'carts', cartId);
        await updateDoc(docRef, {
            items: itemsRef,
        });
    };

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const totalCartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const getCartSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item?.price || 0) * (item?.quantity || 0);
        }, 0);
    };

    const handleItemQuantityChange = (e, id) => {
        setCartItems((currentItems) => {
            return currentItems.map((item) => {
                if (item.id === id) {
                    const quantityValue =
                        parseInt(e.target.value) || item.quantity;
                    return { ...item, quantity: quantityValue };
                }

                return item;
            });
        });
    };

    const increaseCartQuantity = (id, item) => {
        setCartItems((currentItems) => {
            // first check if the item we want to add already exists
            if (currentItems.find((item) => item.id === id)) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        const newItem = {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                        updateDbItem(id, newItem);
                        return newItem;
                    }

                    return item;
                });
            }

            const { title, image, price } = item;
            const newItem = { id, title, image, price, quantity: 1 };
            addItemToDb(newItem);
            return [...currentItems, newItem];
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.quantity > 1) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }

                    return item;
                });
            }

            removeItemFromDb(currentItems, id);
            return currentItems.filter((item) => item.id !== id);
        });
    };

    const removeCartItem = (id) => {
        setCartItems((currentItems) => {
            removeItemFromDb(currentItems, id);
            return currentItems.filter((item) => item.id !== id);
        });
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                openCart,
                closeCart,
                totalCartQuantity,
                getItemQuantity,
                getCartSubtotal,
                handleItemQuantityChange,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeCartItem,
            }}
        >
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
};
