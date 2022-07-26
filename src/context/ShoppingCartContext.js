import { createContext, useEffect, useState } from 'react';
import Cart from 'components/Cart';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase-config';
import {
    queryUserData,
    setUsersRef,
    addItemToDb,
    removeItemFromDb,
    updateDbItem,
    getUsersDocId,
} from 'utils/firestoreFunctions';
import FloatingErrorAlert from 'components/UI/FloatingErrorAlert';

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const loadDbItems = async () => {
            try {
                if (user) {
                    const querySnapshot = await queryUserData(user).catch(
                        (err) => setError(err.message)
                    );
                    const usersRef = await getUsersDocId();
                    setUsersRef(usersRef);
                    if (querySnapshot.empty) {
                        setCartItems([]);
                        return;
                    }
                    const userData = querySnapshot.docs[0].data();
                    setCartItems(userData.cartItems);
                } else {
                    setCartItems([]);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        loadDbItems();
    }, [user]);

    const resetError = () => setError(null);
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
                    const newItem = { ...item, quantity: quantityValue };
                    if (user)
                        updateDbItem(user, id, newItem).catch((err) =>
                            setError(err.message)
                        );
                    return newItem;
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
                        if (user)
                            updateDbItem(user, id, newItem).catch((err) =>
                                setError(err.message)
                            );
                        return newItem;
                    }

                    return item;
                });
            }

            const { title, image, price } = item;
            const newItem = { id, title, image, price, quantity: 1 };
            if (user)
                addItemToDb(newItem).catch((err) => setError(err.message));
            return [...currentItems, newItem];
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.quantity > 1) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        const newItem = {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                        if (user)
                            updateDbItem(user, id, newItem).catch((err) =>
                                setError(err.message)
                            );
                        return newItem;
                    }

                    return item;
                });
            }

            if (user) {
                const itemToRemove = currentItems.find(
                    (item) => item.id === id
                );
                removeItemFromDb(itemToRemove).catch((err) =>
                    setError(err.message)
                );
            }
            return currentItems.filter((item) => item.id !== id);
        });
    };

    const removeCartItem = (id) => {
        setCartItems((currentItems) => {
            if (user) {
                const itemToRemove = currentItems.find(
                    (item) => item.id === id
                );
                removeItemFromDb(itemToRemove).catch((err) =>
                    setError(err.message)
                );
            }
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
            <FloatingErrorAlert error={error} closeError={resetError} />
        </ShoppingCartContext.Provider>
    );
};
