import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartContext } from 'context/ShoppingCartContext';

const PurchaseNowButton = ({ id, title, image, price }) => {
    const { openCart, increaseCartQuantity } = useContext(ShoppingCartContext);

    return (
        <motion.button
            className="bg-green-400 py-2 px-6"
            whileTap={{
                scale: 0.9,
                transition: { type: 'spring', stiffness: 500 },
            }}
            onClick={() => {
                increaseCartQuantity(id, {
                    title: title,
                    image: image,
                    price: price,
                });
                openCart();
            }}
        >
            Purchase now
        </motion.button>
    );
};

export default PurchaseNowButton;
