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

    const increaseCartQuantity = ({ id, title, image, price }) => {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }

                    return item;
                });
            }

            return [...currentItems, { id, title, image, price, quantity: 1 }];
        });
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                openCart,
                closeCart,
                totalCartQuantity,
                increaseCartQuantity,
            }}
        >
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
};
