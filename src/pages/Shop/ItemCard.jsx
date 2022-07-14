import React from 'react';
import sweatshirt from '../../assets/sweatshirt.jpg';
import { FaCartPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ItemCard = () => {
    return (
        <motion.article
            className="flex cursor-pointer flex-col space-y-4 rounded-2xl bg-white p-4 shadow-xl"
            whileHover={{
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
        >
            <img src={sweatshirt} alt="sweatshirt" className="max-h-72" />
            <div className="flex flex-col">
                <h4 className="font-medium">Sweatshirt</h4>
                <p className="text-lg font-bold">$40.00</p>
            </div>
            <button className="bg-purple py-2 px-6 text-white">
                <div className="flex flex-row items-center justify-center space-x-3">
                    <FaCartPlus size={18} />
                    <span>Add to cart</span>
                </div>
            </button>
        </motion.article>
    );
};

export default ItemCard;
