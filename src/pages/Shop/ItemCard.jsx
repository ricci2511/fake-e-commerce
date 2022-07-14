import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ItemCard = ({ title, image, price }) => {
    return (
        <article className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="mx-auto h-80 p-12">
                <motion.img
                    src={image}
                    alt={title}
                    className="h-full cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="flex h-full flex-col gap-6 p-8">
                <div className="flex h-full flex-col justify-end gap-4">
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-lg font-bold">${price}</p>
                </div>
                <motion.button
                    className="border-2 border-purple bg-white py-2 px-6 text-black"
                    whileHover={{
                        backgroundColor: '#5C4EBD',
                        color: 'rgb(255, 255, 255)',
                    }}
                >
                    <div className="flex flex-row items-center justify-center space-x-3">
                        <FaCartPlus size={18} />
                        <span>Add to cart</span>
                    </div>
                </motion.button>
            </div>
        </article>
    );
};

export default ItemCard;
