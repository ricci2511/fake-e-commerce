import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';
import { ShoppingCartContext } from 'context/ShoppingCartContext';

const AddToCartButton = ({ id, title, image, price }) => {
    const { increaseCartQuantity } = useContext(ShoppingCartContext);

    return (
        <motion.button
            className="border-2 border-purple py-2 px-6"
            whileHover={{
                backgroundColor: ['#ffffff', '#5C4EBD'],
                color: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
            }}
            whileTap={{
                scale: 0.9,
                transition: { type: 'spring', stiffness: 500 },
            }}
            transition={{ duration: 0.25 }}
            onClick={() =>
                increaseCartQuantity(id, {
                    title: title,
                    image: image,
                    price: price,
                })
            }
        >
            <div className="flex flex-row items-center justify-center space-x-3">
                <FaCartPlus size={18} />
                <span>Add to cart</span>
            </div>
        </motion.button>
    );
};

export default AddToCartButton;
