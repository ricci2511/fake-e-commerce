import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ShoppingCartContext } from 'context/ShoppingCartContext';

const ShoppingCartButton = () => {
    const { totalCartQuantity, openCart } = useContext(ShoppingCartContext);

    return (
        <motion.button
            className="relative rounded-full bg-white p-3 sm:p-4"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            whileHover={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 0.65 },
            }}
            transition={{
                type: 'spring',
                stiffnes: 60,
            }}
            onClick={openCart}
        >
            <FaShoppingCart size={20} />
            {totalCartQuantity > 0 && (
                <div className="absolute bottom-0 right-0 flex h-6 w-6 translate-y-2 items-center justify-center rounded-full bg-red-500 text-white">
                    {totalCartQuantity}
                </div>
            )}
        </motion.button>
    );
};

export default ShoppingCartButton;
