import { createContext, useState } from 'react';
import Cart from '../components/Cart';

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const totalCartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
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
                        return { ...item, quantity: item.quantity + 1 };
                    }

                    return item;
                });
            }

            // in case it is a new item we add the necessary properties
            const { title, image, price } = item;
            return [...currentItems, { id, title, image, price, quantity: 1 }];
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

            return currentItems.filter((item) => item.id !== id);
        });
    };

    const removeCartItem = (id) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                openCart,
                closeCart,
                totalCartQuantity,
                getItemQuantity,
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
